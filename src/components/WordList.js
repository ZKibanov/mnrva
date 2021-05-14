import React from 'react';
import { useSelector } from 'react-redux';
import WordCard from './WordCard';

import './WordList.css';

function WordList() {
  const words = useSelector((store) => store.wordsArray);
  return (
    <div className="item-list-wrapper">
      <ul className="item-list">
        {words.map((item) => (
          <WordCard wordObject={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default WordList;
