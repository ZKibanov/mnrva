import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import 'antd/dist/antd.css';
import { Alert } from 'antd';
import WordList from './WordList';
import NewWordForm from './NewWordForm';
import { setWordsToStore, setLoading, setError } from '../store/syns';
import { getAsyncData } from '../utils';

function App() {
  const dispatch = useDispatch();
  const isError = useSelector((store) => store.isError);
  const wordsArray = useSelector((store) => store.wordsArray);

  const downloadFromStore = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getAsyncData();
      if (data) dispatch(setWordsToStore(data));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };

  useEffect(() => downloadFromStore(), []);

  const saveToStore = () => {
    localStorage.setItem('words', JSON.stringify(wordsArray));
  };

  const clearStores = () => {
    localStorage.setItem('words', JSON.stringify([]));
    dispatch(setWordsToStore([]));
  };

  const content = (
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
        <button
          type="button"
          aria-label="save list"
          className="btn-save-all"
          onClick={saveToStore}
        >
          сохранить изменения
        </button>
        <button
          type="button"
          aria-label="clear list"
          className="btn-clear-all"
          onClick={clearStores}
        >
          очистить синонимы
        </button>
      </footer>
    </div>
  );

  const errorMessage =     <Alert
  message="Ошибка связи"
  description="Пожалуйста перезагрузите страницу."
  type="error"
  showIcon
/>

  return (
    <>
      {!isError && content}
      {isError && errorMessage}
    </>
  );
}

export default App;
