import { useEffect, useState } from "react";
function App() {
  const [allTodos, setAllTodos] = useState([])
  const [singleTodo, setSingleTodo] = useState({ title: '', desc: '' })
  function handleAddTodo() {
    setAllTodos([...allTodos, singleTodo])
    saveTodoLocalStore([...allTodos,singleTodo])

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
  function removeTodo(i){
    let newTodos = [...allTodos]
    newTodos.splice(i ,1)
    saveTodoLocalStore(newTodos)
    setAllTodos(newTodos)
  }
  function saveTodoLocalStore(todo){
    localStorage.setItem('todos',JSON.stringify(todo))
  }

  function getTodoFromLocalStore(){
    let data=JSON.parse(localStorage.getItem('todos')) || []
    setAllTodos(data)
  }
  useEffect(()=>{
    getTodoFromLocalStore()
  },[])

  return (
    <>
      <div>
        <input type="text" placeholder="title"
          onChange={(e) =>
            setSingleTodo((preValue) => ({
              ...preValue,
              title: e.target.value
            }))}
        />
        <br />
        <br />
        <input type='text' placeholder='desc'
          onChange={(e) => setSingleTodo((preValue) => ({
            ...preValue,
            desc: e.target.value
          }))} />
        <br />
        <br />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        {
          allTodos.map((data, index) => {
            return (<div key={index}>
              <p>{index + 1}</p>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <button onClick={() => { removeTodo(index ) }}>Delete</button>
            </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App