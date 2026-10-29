import React from 'react';

export default function IconExternalLink({ width = 12, height = 12 }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="ax-external-link-icon"
        >
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
        </svg>
    );
}
