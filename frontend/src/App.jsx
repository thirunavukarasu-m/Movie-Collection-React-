import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HomePage />
      </div>
    </>
  )
}

export default App
