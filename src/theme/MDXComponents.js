import MDXComponents from '@theme-original/MDXComponents';
import React, { useState, useRef, useEffect } from 'react';

// Inline icon SVG as a data URI
const IMAGE_ICON_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24' fill='%232e8555'%3E%3Cpath d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z'/%3E%3C/svg%3E";

// Custom lightbox component for inline images
function InlineImageWithLightbox({ src, caption }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const iconRef = useRef(null);
    const [originRect, setOriginRect] = useState(null);

    // Block scrolling when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const openLightbox = (e) => {
        e.stopPropagation();
        if (iconRef.current) {
            setOriginRect(iconRef.current.getBoundingClientRect());
        }
        setIsOpen(true);
        setIsClosing(false);
    };

    const closeLightbox = (e) => {
        e.stopPropagation();
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);
    };

    return (
        <>
            <span
                className="inline-zoom-wrapper"
                onClick={openLightbox}
                title={caption}
                ref={iconRef}
            >
                <img
                    src={IMAGE_ICON_SVG}
                    alt={caption}
                    className="inline-zoom-icon"
                />
            </span>
            {isOpen && (
                <div
                    className={`inline-lightbox-overlay ${isClosing ? 'closing' : ''}`}
                    onClick={closeLightbox}
                >
                    <div
                        className={`inline-lightbox-content ${isClosing ? 'closing' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                        style={originRect ? {
                            '--start-x': `${originRect.left + originRect.width / 2 - window.innerWidth / 2}px`,
                            '--start-y': `${originRect.top + originRect.height / 2 - window.innerHeight / 2}px`
                        } : {}}
                    >
                        <img src={src} alt={caption} onClick={closeLightbox} />
                    </div>
                </div>
            )}
        </>
    );
}

export default {
    ...MDXComponents,
    img: (props) => {
        const alt = props.alt || '';
        let caption = alt;
        let width = props.width || '600';
        let isInline = false;

        // 支持 ![描述|宽度|inline] 语法
        if (alt.includes('|')) {
            const parts = alt.split('|');
            caption = parts[0];
            width = parts[1] || '600';
            if (parts.length > 2 && parts[2] === 'inline') {
                isInline = true;
            }
        }

        if (isInline) {
            // For small inline images, use custom lightbox
            if (parseInt(width) <= 32) {
                return <InlineImageWithLightbox src={props.src} caption={caption} />;
            }
            return (
                <img
                    {...props}
                    alt={caption}
                    title={caption}
                    style={{
                        cursor: 'zoom-in',
                        width: `${width}px`,
                        height: 'auto',
                        verticalAlign: 'middle',
                        margin: '0 8px',
                        display: 'inline-block',
                        borderRadius: '4px',
                        ...props.style
                    }}
                />
            );
        }

        return (
            <figure className="img-container">
                <img
                    {...props}
                    alt={caption}
                    style={{
                        cursor: 'zoom-in',
                        width: props.width ? `${width}px` : 'auto',
                        height: 'auto',
                        ...props.style
                    }}
                />
                {caption && <figcaption>图示：{caption}</figcaption>}
            </figure>
        );
    },
};
