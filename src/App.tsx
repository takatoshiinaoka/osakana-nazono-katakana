import { useEffect, useState } from 'react'
import { FishList } from './components/FishList'
import { Loading } from './components/Loading'
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

  return <div>{loading ? <Loading /> : <FishList fishes={fishes} />}</div>
}

export default App
