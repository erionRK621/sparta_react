import { useRef } from "react";
import React from "react";
import { useHistory } from "react-router-dom";
import { createWord, addWordFB } from "./redux/modules/word";
import { useDispatch } from "react-redux";
import { collection, getDocs, addDoc } from "firebase/firestore";

const AddWord = () => {
  const wordInput = useRef();
  const descInput = useRef();
  const exampleInput = useRef();

  const history = useHistory();
  const dispatch = useDispatch();

  const addWord = () => {
    const new_list_state = {
      word: wordInput.current.value,
      desc: descInput.current.value,
      example: exampleInput.current.value,
    };
    // dispatch(createWord(new_list_state));
    // // const docREf = await addDoc(collection(db, "word"), {
    // //   word: wordInput.current.value,
    // //   desc: descInput.current.value,
    // //   example: exampleInput.current.value,
    // // });
    dispatch(addWordFB(new_list_state));
    console.log("1");
    history.goBack();
  };

  return (
    <div
      style={{
        backgroundColor: "#d5ffce",
        width: "400px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        justifyContent: "center",
        margin: "auto",
        borderRadius: "15px",
        overflow: "scroll",
      }}
    >
      <h1>단어 추가하기</h1>
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "12px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "none",
          }}
        >
          단어
        </div>
        <input
          name="word"
          ref={wordInput}
          style={{
            border: "1px solid #dadafc",
            borderRadius: "12px",
            width: "100%",

            height: "70px",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "12px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          설명
        </div>
        <input
          name="desc"
          ref={descInput}
          style={{
            border: "1px solid #dadafc",
            borderRadius: "12px",
            width: "100%",

            height: "70px",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "12px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          예시
        </div>
        <input
          name="example"
          ref={exampleInput}
          style={{
            border: "1px solid #dadafc",
            borderRadius: "12px",
            width: "100%",

            height: "70px",
          }}
        />
      </div>

      <button
        onClick={() => {
          addWord();
        }}
        style={{
          padding: "10px 36px",
          backgroundColor: "#a2ff93",
          border: "#34f916",
          borderRadius: "30px",
          margin: "36px 0px",
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default AddWord;
