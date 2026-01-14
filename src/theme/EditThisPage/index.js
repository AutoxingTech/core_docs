import React from 'react';
import EditThisPage from '@theme-original/EditThisPage';

function ViewMarkdownLink({ editUrl }) {
    if (!editUrl) {
        return null;
    }

    // Convert edit URL to raw URL
    // From: https://github.com/autoxingtech/core_docs/tree/master/docs/...
    // To: https://raw.githubusercontent.com/autoxingtech/core_docs/master/docs/...
    const rawUrl = editUrl
        .replace('github.com', 'raw.githubusercontent.com')
        .replace('/tree/', '/')
        .replace('/edit/', '/');

    return (
        <a
            href={rawUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-edit-this-page"
        >
            <svg
                fill="currentColor"
                height="20"
                width="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ marginRight: '0.3rem' }}
            >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z" />
                <path d="M8 12h8v2H8zm0 4h8v2H8z" />
            </svg>
            查看 Markdown
        </a>
    );
}

export default function EditThisPageWrapper(props) {
    return (
        <div className="edit-this-page-wrapper">
            <EditThisPage {...props} />
            <span className="edit-separator">|</span>
            <ViewMarkdownLink editUrl={props.editUrl} />
        </div>
    );
}
