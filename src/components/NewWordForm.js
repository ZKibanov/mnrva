import React,{useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {addWord} from '../store/syns'
import './NewWordForm.css';

function NewWordForm() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

  const saveChanges = (ev) => {
    ev.preventDefault();
    dispatch(addWord(inputValue))
  };

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
    console.log(ev.target.value);
  };

  const antIcon = (
    <LoadingOutlined style={{ color: 'white', fontSize: 18 }} spin />
  );
  const LoadingIndicator = (
    <div className="loading-indicator-wrapper">
      <Spin indicator={antIcon} />
    </div>
  );
  const isLoading = useSelector((store) => store.isLoading);

  const MainButton = isLoading ? (
    LoadingIndicator
  ) : (
    <button type="submit" className="submit-btn" onClick={saveChanges}>
      добавить
    </button>
  );

  return (
    <div className="word-edit-form-wrapper">
      <h2 className="form-header">Синонимы</h2>
      <></>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="word-edit-form_info-btn" />
      <form className="word-edit-form" onSubmit={saveChanges}>
        <></>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="newWord" className="word-edit-form_label">
          добавление синонима:
        </label>{' '}
        <input
          type="text"
          id="newWord"
          className="word-edit-form_input"
          placeholder="Введите название"
          onChange={onInputChange}
        />
      </form>
      {MainButton}
    </div>
  );
}

export default NewWordForm;
