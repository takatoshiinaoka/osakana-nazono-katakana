// このコードは使われてないけど参考のため残します。
import { createContext } from 'react'
import { Fish } from '@/types/Fish'
import {
  FishesContextProps,
  FishesContextProviderProps,
} from '@/types/FishesContext'
import { useFetch } from '@/hooks/useFetch'

export const FishesContext = createContext<FishesContextProps>({
  data: [],
  isLoading: true,
  isError: false,
})

export const FishesProvider = ({ children }: FishesContextProviderProps) => {
  const { data, isLoading, isError } = useFetch<Array<Fish>>('/api/fishes')

  return (
    <FishesContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </FishesContext.Provider>
  )
}
