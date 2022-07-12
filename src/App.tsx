import { useEffect, useState } from 'react'
import './App.css'
import { FishList } from './components/FishList'
import { Fish } from './types/Fish'

const fetchFishes = async (
  setFishes: React.Dispatch<React.SetStateAction<Array<Fish>>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const res = await fetch(`/api/fishes`)
  const fishes = await res.json()
  setFishes(fishes)
  setLoading(false)
}

function App() {
  const [fishes, setFishes] = useState(Array<Fish>)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFishes(setFishes, setLoading)
  }, [])

  return <div>{loading ? <h1>loading...</h1> : <FishList fishes={fishes} />}</div>
}

export default App
