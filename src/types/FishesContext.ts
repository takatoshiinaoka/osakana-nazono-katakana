// このコードは使われてないけど参考のため残します。
import { ReactNode } from 'react'
import { Fish } from '@/types/Fish'

export type FishesContextProps = {
  data?: Array<Fish>
  isLoading: boolean
  isError: boolean
}

export type FishesContextProviderProps = {
  children: ReactNode
}
