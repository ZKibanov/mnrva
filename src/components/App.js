import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import WordList from './WordList';
import NewWordForm from './NewWordForm';

function App() {
  const isLoading = useSelector((store) => store.isLoading);
  const isError = useSelector((store) => store.isError);
  return (
    <div className="App">
      <header className="header">
        <h1 className="header_main-header">
          {' '}
          Редактирование группы синонимов поисковых фраз
        </h1>
        <button type="button" aria-label="close" className="btn-close" />
      </header>
      <NewWordForm />
      <WordList />
      <footer className="footer">
        <button type="button" aria-label="save list" className="btn-save-all">
          сохранить изменения
        </button>
        <button type="button" aria-label="clear list" className="btn-clear-all">
          очистить синонимы
        </button>
      </footer>
    </div>
  );
}

export default App;
