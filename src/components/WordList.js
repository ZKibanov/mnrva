import React from 'react';
import { useEffect,useSelector } from 'react-redux';
import WordCard from './WordCard';

import './WordList.css';

function WordList() {
  const words = useSelector(state => state.wordsArray);
  return (
    <div className="item-list-wrapper">
      <ul className="item-list">{words.map((item) => WordCard(item))}</ul>
    </div>
  );
}

export default WordList;
