import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editWord, deleteWord } from '../store/syns';
import './WordCard.css';

function WordCard(props) {
  const { id, value } = props.wordObject;
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const turnToEdit = () => {
    setEditing(true);
  };

  const saveChanges = (ev) => {
    ev.preventDefault();
    dispatch(editWord(id, inputValue));
    setEditing(false);
  };

  const deleteItem = () => {
    dispatch(deleteWord(id));
  };

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const WordEditForm = (
    <div className="form-wrapper">
      <form className="word-edit-form" onSubmit={saveChanges}>
        <></>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="newWord" className="word-edit-form_label">
          редактирование синонима:
        </label>{' '}
        <input
          type="text"
          id="newWord"
          className="word-edit-form_input"
          defaultValue={value}
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
    <li>
      <div>
        {!isEditing && Item}
        {isEditing && WordEditForm}
      </div>
    </li>
  );
}

export default WordCard;
