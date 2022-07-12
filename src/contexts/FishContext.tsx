import {
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { Fish } from '../types/Fish'

type FishesContextProps = {
  fishes: Array<Fish>
  loading: boolean
}

export const FishesContext = createContext<FishesContextProps>({
  fishes: [],
  loading: true,
})

type Props = {
  children: ReactNode
}

const fetchFishes = async (
  setFishes: React.Dispatch<React.SetStateAction<Array<Fish>>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const res = await fetch('/api/fishes')
  const fishes = await res.json()
  setFishes(fishes)
  setLoading(false)
}

export const FishesProvider = ({ children }: Props) => {
  const [fishes, setFishes] = useState(Array<Fish>)
  const [loading, setLoading] = useState(true)
  useEffect(() => {fetchFishes(setFishes, setLoading)}, [])
  return (
    <FishesContext.Provider value={{ fishes, loading }}>
      {children}
    </FishesContext.Provider>
  )
}
