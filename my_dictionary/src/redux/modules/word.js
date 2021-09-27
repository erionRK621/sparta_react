//bucket.js

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const initialState = {
  list: [
    { word: "단어", desc: "단어설명", example: "단어예시" },
    { word: "단어2", desc: "단어설명2", example: "단어예시2" },
  ],
};

// Action Creators
export const loadWord = (wordinfo) => {
  return { type: LOAD, wordinfo };
};

export const createWord = (wordinfo) => {
  return { type: CREATE, wordinfo };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD":
      if (action.wordinfo.length > 0) {
        return { list: action.vocab };
      }
      return state;

    case "word/CREATE":
      const new_word_list = [...state.list, action.wordinfo];
      return { list: new_word_list };

    default:
      return state;
  }
}
