
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Home from './Components/home'

function App() {

  const [coffees, setCoffees] = useState([])
  useEffect(() => {
    fetch('https://coffee-store-server-d2wbs3ji3-hasan-bin-alis-projects.vercel.app/coffee')
    .then(res => res.json())
    .then(data => setCoffees(data))
  },[])

  return (
    <>
      
      <div className='grid grid-cols-2 gap-5 mt-10'>
      {
        coffees.map(coffee => <Home key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees}></Home>)
      }
      </div>
    </>
  )
}

export default App
