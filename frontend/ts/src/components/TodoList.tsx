import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id:number,completed:boolean)=>void;
    onDelete: (id:number)=>void;
}

const TodoList = ({todos,onCompletedChange,onDelete}:TodoListProps) => {
    const todosSorted = todos.sort((a,b)=>{
        if(a.completed === b.completed){
            return b.id - a.id;
        }
        return a.completed ? 1:-1;
    })
  return (
    <div className='space-y-2'>
       {todosSorted.map((all, index) => (
            <TodoItem
              todo={all}
              key={index}
              onCompletedChange={onCompletedChange}
              onDelete={onDelete}
            />
          ))}
    </div>
  )
}

export default TodoList
