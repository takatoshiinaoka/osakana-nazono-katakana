import { useEffect, useState } from 'react'
import './App.css'
import { FishList } from './components/FishList'
import { Fish } from './types/Fish'

const fetchFishes = async (
  setFishes: React.Dispatch<React.SetStateAction<Fish[]>>
) => {
  const res = await fetch(`/api/fishes`)
  const fishes = await res.json()
  setFishes(fishes)
}

function App() {
  const [fishes, setFishes] = useState(Array<Fish>)

  useEffect(() => {
    fetchFishes(setFishes)
  }, [])

  return <div><FishList fishes={fishes} /></div>
}

export default App
