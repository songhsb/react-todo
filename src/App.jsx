import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";

const App = () => {
  const [toDoCard, setToDoCard] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      detail: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "자바스크립트 공부",
      detail: "자바스크립트를 공부해봅시다.",
      isDone: true,
    },
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
    event.preventDefault();
    const newToDoCard = {
      id: toDoCard[toDoCard.length - 1].id + 1,
      title,
      detail,
      isDone: false,
    };
    setToDoCard([...toDoCard, newToDoCard]);
    setTitle("");
    setDetail("");
  };

  return (
    <Layout>
      <Header />
      <form className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            className="add-input"
            value={title}
            onChange={titleChangeHandler}
          />
          <label className="form-label">내용</label>
          <input
            className="add-input"
            value={detail}
            onChange={detailChangeHandler}
          />
        </div>
        <button className="add-button" onClick={addBtnHandler}>
          추가하기
        </button>
      </form>
      <div className="list-container">
        <h2>Working.. 🔥</h2>
        <div className="list-wrapper">
          {Array.from(toDoCard).map(function (card) {
            return (
              card.isDone === false && (
                <ToDoList
                  key={card.id}
                  card={card}
                  toDoCard={toDoCard}
                  setToDoCard={setToDoCard}
                  DoneBtn={DoneBtn}
                />
              )
            );
          })}
        </div>
        <h2>Done..! 🎉</h2>
        <div className="list-wrapper">
          {Array.from(toDoCard).map(function (card) {
            return (
              card.isDone === true && (
                <ToDoList
                  key={card.id}
                  card={card}
                  toDoCard={toDoCard}
                  setToDoCard={setToDoCard}
                  DoneBtn={DoneBtn}
                />
              )
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

const ToDoList = ({ card, toDoCard, setToDoCard, DoneBtn }) => {
  const removeBtnHandler = (id) => {
    const newToDoCard = toDoCard.filter((card) => card.id !== id);
    setToDoCard(newToDoCard);
  };

  return (
    <div className="todo-container" key={card.id}>
      <div>
        <h3>{card.title}</h3>
        <p>{card.detail}</p>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => removeBtnHandler(card.id)}
        >
          삭제하기
        </button>
        <DoneBtn
          card={card}
          isDone={card.isDone}
          toDoCard={toDoCard}
          setToDoCard={setToDoCard}
        />
      </div>
    </div>
  );
};

const DoneBtn = ({ card, isDone, toDoCard, setToDoCard }) => {
  if (isDone === false) {
    return (
      <button
        className="todo-complete-button button"
        onClick={() => {
          card.isDone = true;
          setToDoCard([...toDoCard]);
        }}
      >
        완료
      </button>
    );
  } else {
    return (
      <button
        className="todo-complete-button button"
        onClick={() => {
          card.isDone = false;
          setToDoCard([...toDoCard]);
        }}
      >
        취소
      </button>
    );
  }
};

export default App;
