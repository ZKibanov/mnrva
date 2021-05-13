import React from 'react';
import { useSelector } from 'react-redux';
import WordCard from './WordCard';
import './WordList.css';

function WordList() {
  const words = useSelector((store) => store.wordsArray);
  const wordsComponents = words.map((word) => WordCard(word));
  return (
    <div className="item-list-wrapper">
      <ul className="item-list">{wordsComponents}</ul>
    </div>
  );
}

export default WordList;
