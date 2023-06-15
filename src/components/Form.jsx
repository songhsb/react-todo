import React, { useState } from "react";
import "./style/Form.css";

const Form = ({ toDoCard, setToDoCard }) => {
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
    if (title !== "" && detail !== "") {
      const newToDoCard = {
        id: toDoCard[toDoCard.length - 1].id + 1,
        title,
        detail,
        isDone: false,
      };
      setToDoCard([...toDoCard, newToDoCard]);
      setTitle("");
      setDetail("");
    }
  };

  return (
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
  );
};

export default Form;
