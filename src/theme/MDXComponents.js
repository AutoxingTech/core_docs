import MDXComponents from '@theme-original/MDXComponents';
import React from 'react';

export default {
    ...MDXComponents,
    img: (props) => {
        const alt = props.alt || '';
        let caption = alt;
        let width = props.width || '600';

        // 支持 ![描述|宽度] 语法
        if (alt.includes('|')) {
            const parts = alt.split('|');
            caption = parts[0];
            width = parts[1];
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
