import React, { useState } from 'react';
import PageEditor from './components/PageEditor';
import PagePreview from './components/PagePreview';
import Toolbox from './components/Toolbox';
import './App.css';

function App() {
  const [pageContent, setPageContent] = useState([
    { type: 'text', content: 'Добро пожаловать!' },
  ]);
  const [generatedHTML, setGeneratedHTML] = useState('');

  const handleUpdateContent = (index, newContent) => {
    const newPageContent = [...pageContent];
    newPageContent[index] = newContent;
    setPageContent(newPageContent);
  };

  const handleAddComponent = (componentType) => {
    let newComponent;
    if (componentType === 'text') {
      newComponent = { type: 'text', content: 'Новый текст' };
    } else if (componentType === 'image') {
      newComponent = { type: 'image', src: 'https://via.placeholder.com/150' };
    } else if (componentType === 'heading') {
      newComponent = { type: 'heading', content: 'Новый заголовок' };
    }
    setPageContent([...pageContent, newComponent]);
  };

  const handleDeleteComponent = (indexToDelete) => {
    const newPageContent = pageContent.filter((_, index) => index !== indexToDelete);
    setPageContent(newPageContent);
  };

  const generateHTML = () => {
    let html = '';
    pageContent.forEach(element => {
      if (element.type === 'text') {
        html += `<p>${element.content}</p>\n`;
      } else if (element.type === 'image') {
        html += `<img src="" alt="image">\n`;
      } else if (element.type === 'heading') {
        html += `<h2>${element.content}</h2>\n`;
      }
    });
    setGeneratedHTML(html);
  };

  return (
    <div className="app-container">
      <Toolbox onAddComponent={handleAddComponent} />
      <div className="main-area">
        <PageEditor
          pageContent={pageContent}
          onUpdateContent={handleUpdateContent}
          onDeleteComponent={handleDeleteComponent}
        />
        <PagePreview pageContent={pageContent} />
        <button onClick={generateHTML}>Сгенерировать HTML</button>
        {generatedHTML && (
          <div className="generated-html">
            <h3>Сгенерированный HTML:</h3>
            <pre>{generatedHTML}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;