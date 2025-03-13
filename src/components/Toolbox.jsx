import React from 'react';

function Toolbox({ onAddComponent }) {
    return (
        <div className="toolbox">
            <h2>Панель инструментов</h2>
            <button onClick={() => onAddComponent('text')}>Добавить текст</button>
            <button onClick={() => onAddComponent('image')}>Добавить изображение</button>
            <button onClick={() => onAddComponent('heading')}>Добавить заголовок</button>
        </div>
    );
}

export default Toolbox;