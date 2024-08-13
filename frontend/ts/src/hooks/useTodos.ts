import {useEffect,useState} from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

const useTodos = () => {
    const [todos, setTodos] = useState(()=>{
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos: dummyData
      });
    
      useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
      },[todos])
    
      const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
        );
        //alert(`${id} has been ${completed?"completed":"not completed"}`)
      };
    
      const addTodo = (title: string) => {
        setTodos((prevTodos) => [
          {
            id: Date.now(),
            title,
            completed: false,
          },
          ...prevTodos,
        ]);  
      };
    
      const deleteTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter((x) => x.id !== id));
      };
    
      const deleteAllCompleted = ()=>{
        setTodos(prevTodos=>prevTodos.filter((x)=>!x.completed));
      }
      return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompleted
      }
}

export default useTodos
