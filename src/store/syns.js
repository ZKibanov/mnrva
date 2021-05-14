// initial state
const initialState = {
  isLoading: false,
  isError: false,
  wordsArray: [],
};

// Action types
const ADD_WORD = 'addWord';
const DELETE_WORD = 'deleteWord';
const EDIT_WORD = 'editWord';
const SET_WORDS_TO_STORE = 'setWordsToStore';
const SET_ERROR = 'setError';
const SET_LOADING = 'setLoading';

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

export const editWord = (id, value) => ({
  type: EDIT_WORD,
  payload: {
    id,
    value,
  },
});

export const setWordsToStore = (words) => ({
  type: SET_WORDS_TO_STORE,
  payload: {
    words,
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
  switch (action.type) {
    case ADD_WORD: {
      const newWords = [
        ...state.wordsArray,
        { value: action.payload.word, id: Date.now() },
      ];

      const newState = {
        ...state,
        wordsArray: newWords,
      };
      return newState;
    }

    case DELETE_WORD: {
      const newWords = [...state.wordsArray];
      const newState = {
        ...state,
        wordsArray: newWords.filter(
          (wordObject) => wordObject.id !== action.payload.id
        ),
      };
      return newState;
    }

    case EDIT_WORD: {
      const newWords = [
        ...state.wordsArray.map((el) =>
          el.id === action.payload.id
            ? { id: action.payload.id, value: action.payload.value }
            : el
        ),
      ];

      const newState = {
        ...state,
        wordsArray: newWords,
      };
      return newState;
    }

    case SET_WORDS_TO_STORE: {
      const newState = { ...state, wordsArray: action.payload.words };
      return newState;
    }

    case SET_LOADING: {
      const newState = { ...state, isLoading: action.payload.isLoading };
      return newState;
    }

    case SET_ERROR: {
      const newState = { ...state, isError: action.payload.isError };
      return newState;
    }

    default:
      return state;
  }
}

/* eslint-enable no-return-assign */
