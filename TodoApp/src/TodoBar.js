import styled from "@emotion/styled";
import React, { useState } from "react";

const Container = styled.div`
  width: 80%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #ccc;
`;

const TodoValue = styled.input`
  font-size: 2rem;
  font-weight: 700;
  border: none;
  background-color: transparent;
  outline: none;
`;

const ButtonContianer = styled.div`
  display: flex;
  gap: 1rem;
`;
const XButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: red;
`;

const EditButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: blue;
`;

const TodoBar = (props) => {
  const { todo, onDelete, onEdit } = props;
  const [isEditMode, setEditMode] = useState(false);
  const [localTodoValue, setLocalTodoValue] = useState(todo);

  return (
    <Container>
      <TodoValue value={todo} />
      <ButtonContianer>
        <EditButton onClick={onEdit}>Edit</EditButton>
        <XButton onClick={onDelete}>X</XButton>
      </ButtonContianer>
    </Container>
  );
};

export default TodoBar;
