import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB } from "./redux/modules/word";

const Wordlist = (props) => {
  const history = useHistory();
  // const dispatch = useDispatch();

  const word_list = useSelector((state) => state.word.list);

  return (
    <div
      style={{
        backgroundColor: "#d5ffce",
        width: "400px",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        justifyContent: "center",
        margin: "auto",
        borderRadius: "15px",
        position: "relative",
      }}
    >
      <div>
        <h1>MY DICTIONARY</h1>
      </div>
      <div
        style={{
          height: "80vh",
          overflow: "auto",
        }}
      >
        {word_list.map((wordListItem, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "12px",
                margin: "20px 0",
              }}
            >
              <div
                style={{
                  margin: "5px",
                }}
              >
                <h5
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  단어
                </h5>
                <p>{wordListItem.word}</p>
              </div>
              <div
                style={{
                  margin: "5px",
                }}
              >
                <h5
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  설명
                </h5>
                <p>{wordListItem.desc}</p>
              </div>
              <div
                style={{
                  margin: "5px",
                }}
              >
                <h5
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  예시
                </h5>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  {wordListItem.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            color: "white",
            fontSize: "60px",
            width: "80px",
            height: "80px",
            borderRadius: "40px",
            backgroundColor: "#A1FF93",
            position: "absolute",
            bottom: "30px",
          }}
          onClick={() => {
            history.push("/word");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Wordlist;
