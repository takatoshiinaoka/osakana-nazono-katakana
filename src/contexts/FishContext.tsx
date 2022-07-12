import {
  createContext,
  useState,
  useEffect,
} from 'react'
import { fetchFishes } from '../apis/fetchFishes'
import { Fish } from '../types/Fish'
import { FishesContextProps, FishesContextProviderProps } from '../types/FishesContext'

export const FishesContext = createContext<FishesContextProps>({
  fishes: [],
  loading: true,
})

export const FishesProvider = ({ children }: FishesContextProviderProps) => {
  const [fishes, setFishes] = useState(Array<Fish>)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFishes(setFishes, setLoading)
  }, [])

  return (
    <FishesContext.Provider value={{ fishes, loading }}>
      {children}
    </FishesContext.Provider>
  )
}
