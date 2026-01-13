import MDXComponents from '@theme-original/MDXComponents';
import React from 'react';

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
            return (
                <img
                    {...props}
                    alt={caption}
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
