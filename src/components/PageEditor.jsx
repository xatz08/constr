import React from 'react';

function PageEditor({ pageContent, onUpdateContent, onDeleteComponent }) {
    return (
        <div className="page-editor">
            <h2>Редактор</h2>
            {pageContent.map((element, index) => (
                <div key={index} className="editor-element">
                    {element.type === 'text' && (
                        <textarea
                            value={element.content}
                            onChange={(e) =>
                                onUpdateContent(index, { ...element, content: e.target.value })
                            }
                        />
                    )}
                    {element.type === 'image' && (
                        <div>
                            <input
                                type="text"
                                value={element.src}
                                onChange={(e) =>
                                    onUpdateContent(index, { ...element, src: e.target.value })
                                }
                            />
                            <img src={element.src} alt="image" style={{ maxWidth: '100px' }} />
                        </div>
                    )}
                    {element.type === 'heading' && (
                        <input
                            type="text"
                            value={element.content}
                            onChange={(e) =>
                                onUpdateContent(index, { ...element, content: e.target.value })
                            }
                        />
                    )}
                    <button onClick={() => onDeleteComponent(index)}>Удалить</button>
                </div>
            ))}
        </div>
    );
}

export default PageEditor;