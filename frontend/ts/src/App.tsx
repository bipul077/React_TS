import { useState } from "react";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(dummyData);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    //alert(`${id} has been ${completed?"completed":"not completed"}`)
  };

  const addTodo = (title: string) => {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((x) => x.id !== id));
  };

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <div className="space-y-2">
          <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
        </div>
      </div>
    </main>
  );
};

export default App;
