import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState(dummyData);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    //alert(`${id} has been ${completed?"completed":"not completed"}`)
  };

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm/>
        <div className="space-y-2">
          {todos.map((all, index) => (
            <TodoItem
              todo={all}
              key={index}
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
