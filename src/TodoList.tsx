import React, { ChangeEvent, useState } from "react";
import { Button, Input, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

interface TodoInterface {
  id: number;
  name: string;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodoObj: TodoInterface = {
      id: todos.length + 1,
      name: newTodo,
    };
    setTodos([...todos, newTodoObj]);
    setNewTodo("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <List divided relaxed>
        {todos.map((todo) => (
          <List.Item key={todo.id}>
            <List.Icon name="check" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header>{todo.name}</List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <Input
          type="text"
          placeholder="Enter a Todo"
          value={newTodo}
          onChange={handleChange}
          action
        >
          <input />
          <Button type="submit" color="teal">
            Add Todo
          </Button>
        </Input>
      </form>
    </div>
  );
};
