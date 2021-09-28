//bucket.js
import { db } from "../../firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";

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
export const loadWord = (word_list) => {
  return { type: LOAD, word_list };
};

export const createWord = (wordinfo) => {
  return { type: CREATE, wordinfo };
};

//middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
    console.log(word_data);

    let word_list = [];

    word_data.forEach((b) => {
      console.log(b.data());
      word_list.push({ id: b.id, ...b.data() });
    });

    console.log(word_list);
    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "word"), word);
    const _word = await getDoc(docRef);
    const word_data = { id: _word.id, ..._word.data() };

    console.log(word_data);

    dispatch(createWord(word_data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD":
      {
        return { list: action.word_list };
      }
      return state;

    case "word/CREATE":
      const new_word_list = [...state.list, action.wordinfo];
      return { list: new_word_list };

    default:
      return state;
  }
}
