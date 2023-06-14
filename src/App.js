import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [toDoCard, setToDoCard] = useState([
    { id: 1, title: "리액트 공부하기", detail: "리액트 기초를 공부해봅시다." },
  ]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const detailChangeHandler = (event) => {
    setDetail(event.target.value);
  };
  const addBtnHandler = (event) => {
    const newToDoCard = {
      id: toDoCard.length + 1,
      title,
      detail,
    };
    setToDoCard([...toDoCard, newToDoCard]);
    setTitle("");
    setDetail("");
  };
  const removeBtnHandler = (id) => {
    const newToDoCard = toDoCard.filter((card) => card.id !== id);
    setToDoCard(newToDoCard);
  };

  return (
    <div>
      <div>
        제목
        <input value={title} onChange={titleChangeHandler} />
        내용
        <input value={detail} onChange={detailChangeHandler} />
        <button onClick={addBtnHandler}>추가하기</button>
      </div>
      <div>
        <h2>Working.. 🔥</h2>
        <div>
          {toDoCard.map(function (card) {
            return (
              <div key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
                <button onClick={() => removeBtnHandler(card.id)}>
                  삭제하기
                </button>
                <button>완료</button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
      </div>
    </div>
  );
};

export default App;
