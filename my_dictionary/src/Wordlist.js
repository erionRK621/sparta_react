import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Wordlist = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const word_list = useSelector((state) => state.word.list);

  return (
    <div>
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
        }}
      >
        <div>
          <h1>MY DICTIONARY</h1>
        </div>
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

      <button
        onClick={() => {
          history.push("/word");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Wordlist;
