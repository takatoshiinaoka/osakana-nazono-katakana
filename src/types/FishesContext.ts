import { ReactNode } from 'react'
import { Fish } from './Fish'

export type FishesContextProps = {
  fishes: Array<Fish>
  loading: boolean
}

export type FishesContextProviderProps = {
  children: ReactNode
}
