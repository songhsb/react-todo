import React from "react";
import "./style/Main.css";

const Main = ({ toDoCard, setToDoCard }) => {
  return (
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

export default Main;
