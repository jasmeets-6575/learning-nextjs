import { Todo } from "@/typings";
import Link from "next/link";

const fetchTodos = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await resp.json();
  return todos;
};

const TodoList = async () => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => {
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
        </p>;
      })}
    </>
  );
};
export default TodoList;
