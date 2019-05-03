import React from 'react';

function BlankLink(props) {
    const { url, title, src, text } = props;
    return (
        <a href={url} target="_blank" rel="noreferrer noopener" title={title}>
            {
                src ? <img src={src} alt={title} />
                    :
                    text
            }

        </a>
    );
}

export default BlankLink;