import { createContext } from 'react'
import { Fish } from '@/types/Fish'
import {
  FishesContextProps,
  FishesContextProviderProps,
} from '@/types/FishesContext'
import { useFetch } from '@/hooks/useFetch'

/**
 * 初期値
 */
export const FishesContext = createContext<FishesContextProps>({
  data: [],
  isLoading: true,
  isError: false,
})

/**
 * FishesをグローバルStateに管理するものと勝手に理解しています。一度ロードするだけで使いまわせる想定。
 * @param param0 FishesContextProviderProps
 * @returns React.Context<FishesContextProps>
 */
export const FishesProvider = ({ children }: FishesContextProviderProps) => {
  const { data, isLoading, isError } = useFetch<Array<Fish>>(
    `${import.meta.env.VITE_API_HOST}/api/fishes`
  )

  return (
    <FishesContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </FishesContext.Provider>
  )
}
