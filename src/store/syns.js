import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer, ReducerAction } from 'react';

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  wordsArray: [
    { value: 'Процент', id: 1 },
    { value: 'Золотая', id: 2 },
    { value: 'Премиум', id: 3 },
    { value: 'Кредит', id: 4 },
  ],
};

// Action types
const ADD_WORD = 'addWord';
const DELETE_WORD = 'deleteWord';
const SET_ERROR = 'setError';
const SET_LOADING = 'setLoading';
const GET_DATA = 'getData';
const SET_DATA = 'setData';

// Action creators

export const addWord = (word) => ({
  type: ADD_WORD,
  payload: {
    word,
  },
});

export const deleteWord = (id) => ({
  type: DELETE_WORD,
  payload: {
    id,
  },
});

export const setError = (isError) => ({
  type: SET_ERROR,
  payload: {
    isError,
  },
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: {
    isLoading,
  },
});

// Reducer
/* eslint-disable no-return-assign */
export default function reducer(state = initialState, action) {
  switch (action) {
    case ADD_WORD:
      return state.wordsArray.push({
        value: action.payload.word,
        id: Date.now(),
      });

    case DELETE_WORD:
      return state.wordsArray.filter(
        (wordObject) => wordObject.id !== action.payload.id
      );

    default:
      return state;
  }
}

/* eslint-enable no-return-assign */
