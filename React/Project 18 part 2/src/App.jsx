import { useEffect, useState } from "react";

function App() {
  const [allTodos, setAllTodos] = useState([])
  const [singleTodo, setSingleTodo] = useState({ title: '', desc: '' })
  function handleAddTodo() {
    if (!singleTodo.title || !singleTodo.desc) {
      return
    }
    setAllTodos([...allTodos, singleTodo])
    saveTodoLocalStore([...allTodos, singleTodo])
  }
  // function removeTodo(indexValue) {
  //   const newTodos = allTodos.filter((item, i) => {
  //     i=i+1
  //     return i !== indexValue
  //   })
  //   console.log(newTodos)
  //   setAllTodos(newTodos)
  //   display()
  // }
  function removeTodo(i) {
    let newTodos = [...allTodos]
    newTodos.splice(i, 1)
    saveTodoLocalStore(newTodos)
    setAllTodos(newTodos)
  }
  function saveTodoLocalStore(todo) {
    localStorage.setItem('todos', JSON.stringify(todo))
  }

  function getTodoFromLocalStore() {
    let data = JSON.parse(localStorage.getItem('todos')) || []
    setAllTodos(data)
  }
  useEffect(() => {
    getTodoFromLocalStore()
  }, [])

  return (
    <div className="bg-blue-400 max-w-screen min-h-screen text-center py-5 overflow-x-hidden">
      <h1 className="text-4xl p-5 font-bold">Todo App</h1>
      <div className="my-4 rounded-5">
        <input type="text" placeholder="Title" className="text-2xl border-2 px-2 focus:outline-none"
          onChange={(e) =>
            setSingleTodo((preValue) => ({
              ...preValue,
              title: e.target.value
            }))}
        />
        <br />
        <br />
        <input type='text' placeholder='Desc' className="text-2xl border-2 px-2 focus:outline-none"
          onChange={(e) => setSingleTodo((preValue) => ({
            ...preValue,
            desc: e.target.value
          }))} />
        <br />
        <br />
        <button className="text-xl bg-green-700 px-4 py-2 rounded-3xl" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        {
          allTodos.map((data, index) => {
            return (<div key={index} className="flex w-[90%] sm:w-[70%]  md:w-[60%] lg:w-[50%] h-fit py-1  bg-lime-100/30
             my-1.5 items-center justify-center">
              <div className="flex w-full justify-between p-2">
                <p className="bg-lime-300/70  py-1 text-center font-bold text-3xl w-[8%]">{index + 1}</p>
                <div className="w-[72%] bg-yellow-400/60 flex
                flex-col items-start px-4">
                  <p className="text-xl font-bold ">{data.title}</p>
                  <p>{data.desc}</p>
                </div>
                <button className="bg-red-500/90 px-1 rounded-5xl font-semibold
                text-center text-lg w-[17%]" onClick={() => { removeTodo(index) }}>Delete <i className="fi fi-bs-trash inline-block"></i></button>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default App




