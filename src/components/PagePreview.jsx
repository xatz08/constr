import React from 'react';

function PagePreview({ pageContent }) {
    return (
        <div className="page-preview">
            <h2>Предпросмотр</h2>
            {pageContent.map((element, index) => {
                if (element.type === 'text') {
                    return <p key={index}>{element.content}</p>;
                } else if (element.type === 'image') {
                    return <img key={index} src={element.src} alt="image" style={{ maxWidth: '200px' }} />;
                } else if (element.type === 'heading') {
                    return <h2 key={index}>{element.content}</h2>;
                }
                return null;
            })}
        </div>
    );
}

export default PagePreview;