import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Form from "./components/Form";
import Main from "./components/Main";

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

  return (
    <Layout>
      <Header />
      <Form toDoCard={toDoCard} setToDoCard={setToDoCard} />
      <Main toDoCard={toDoCard} setToDoCard={setToDoCard} />
    </Layout>
  );
};

export default App;
