/* eslint-disable-next-line no-use-before-define */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { addWord } from '../store/syns';
import './NewWordForm.css';

function NewWordForm() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);

  const saveChanges = (ev) => {
    ev.preventDefault();
    if (inputValue.trim().length === 0) {
      setInputError(true);
    } else {
      setInputValue('');
      dispatch(addWord(inputValue.trim()));
    }
  };

  const onInputChange = (ev) => {
    setInputError(false);
    setInputValue(ev.target.value);
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

  const errorMessage = <div className="error-message">Текст ошибки</div>;
  const errorPlaceholder = 'Введите что-нибудь';
  const standartPlaceHolder = 'Введите название';
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
          value={inputValue}
          className="word-edit-form_input"
          placeholder={inputError ? errorPlaceholder : standartPlaceHolder}
          onChange={onInputChange}
        />
      </form>
      {MainButton}
      {inputError && errorMessage}
    </div>
  );
}

export default NewWordForm;
