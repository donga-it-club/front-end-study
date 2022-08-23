import React, { useState } from "react";
import styled from "@emotion/styled";
import TodoBar from "./TodoBar";

const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: purple;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 5px;
  background-color: aliceblue;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 5px;
  background-color: aliceblue;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function App() {
  const [todoStore, setTodoStore] = useState([]); // => 작성된 todo가 저장되는 Store

  const [todoValue, setTodoValue] = useState(""); // => 작성할 Todo의 Input의 값

  const todoValueInputHandler = (e) => {
    setTodoValue(e.target.value);
  };
  const todoAddSubmitHandler = () => {
    setTodoStore([...todoStore, todoValue]);
    setTodoValue("");
  };
  const todoDeleteHandler = (index) => {
    const newTodoStore = [...todoStore];
    newTodoStore.splice(index, 1);
    setTodoStore(newTodoStore);
  };
  const todoEditHandler = (index, newValue) => {
    const newTodoStore = [...todoStore];
    newTodoStore[index] = newValue;
    setTodoStore(newTodoStore);
  };

  return (
    <Container>
      <Title>To Do App</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="Add a todo"
          value={todoValue}
          onChange={todoValueInputHandler}
        />
        <Button onClick={todoAddSubmitHandler}>OK</Button>
      </InputContainer>
      {todoStore.map((val, idx) => (
        <TodoBar
          key={val}
          todo={val}
          onDelete={() => todoDeleteHandler(idx)}
          onEdit={todoEditHandler}
          thisIndex={idx}
        />
      ))}
    </Container>
  );
}

export default App;
