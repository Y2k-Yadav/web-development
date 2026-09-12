import { Card } from './Component/Card.jsx'
import data from './Utilis/data.js'
import { useState } from 'react'
function App() {
  const [value, setValue] = useState('')
  const [filterData, setFilterData] = useState(data)
  function filterProducts() {
    let res = data.filter((item) =>
      item.products[0].title.toLowerCase().includes(value.toLowerCase()))
    setFilterData(res)
  }
  return (
    <div className='bg-gray-300 text-center w-full h-[dvh]'>
      <h1 className='text-3xl p-4 font-bold'>Fake Dummy Store</h1>
      <input className='p-3 border-2 border-black-500 outline-0 w-82 rounded-l-2xl  focus:placeholder:blur-3xl' onChange={(e) => setValue(e.target.value)} type='text' placeholder='Search for Products' />
      <button className='bg-blue-500 text-white p-3.5 rounded-r-2xl ' onClick={filterProducts}> Search</button>
      <Card data={filterData} className='my-16 p-5 flex justify-around w-full items-center sm:flex flex-wrap justify-content mx-auto' />
    </div>
  )
}

export default App
