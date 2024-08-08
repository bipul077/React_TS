import { dummyData } from './data/todos'
import TodoItem from './components/TodoItem'

const App = () => {

  const setTodoCompleted = (id:number,completed:boolean)=>{
    alert(`${id} has been ${completed?"completed":"not completed"}`)
  }

  return (
    <main className='py-10 h-screen space-y-5'>
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5'>
        <div className='space-y-2'>
          {dummyData.map((all,index)=>(
            <TodoItem todo={all} key={index} onCompletedChange={setTodoCompleted}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
