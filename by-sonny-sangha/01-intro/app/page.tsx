import { Suspense } from "react";
import TodoList from "./(users)/todos/TodoList";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          <TodoList />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <p className="text-blue-500">Loading the Shopping trolley...</p>
        }
      >
        <h1>Loading Shopping trolley</h1>
        <div className="flex space-x-2">
          <TodoList />
        </div>
      </Suspense>
    </div>
  );
};
export default Home;
