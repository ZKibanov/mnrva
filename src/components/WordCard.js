import React, { useState } from 'react';
import './WordCard.css';

function WordCard(wordObject) {
  const { id, value } = wordObject;
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const turnToEdit = () => {
    setEditing(true);
  };

  const saveChanges = (ev) => {
    ev.preventDefault();
    setEditing(false);
  };

  const deleteItem = () => {
    console.log(id);
  };

  const onInputChange = (ev) => {
    console.log(ev.target.value);
    setInputValue(ev.target.value);
  };

  const WordEditForm = (
    <div className="form-wrapper">
      <form className="word-edit-form" onSubmit={saveChanges}>
        <>
        </>
       {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="newWord" className="word-edit-form_label">
          редактирование синонима:
        </label>{' '}
        <input
          type="text"
          id="newWord"
          className="word-edit-form_input"
          defaultValue={inputValue}
          placeholder="Введите название"
          onChange={onInputChange}
        />
      </form>
      <button type="submit" className="submit-btn" onClick={saveChanges}>
        добавить
      </button>
    </div>
  );

  const Item = (
    <div className="item-wrapper">
      <span className="item">{value}</span>
      <button
        type="button"
        aria-label="edit word"
        className="btn-edit"
        onClick={turnToEdit}
      />
      <button
        type="button"
        aria-label="delete word"
        className="btn-delete"
        onClick={deleteItem}
      />
    </div>
  );

  return (
    <li key={id}>
      <div>
        {isEditing && WordEditForm}
        {!isEditing && Item}
      </div>
    </li>
  );
}

export default WordCard;
