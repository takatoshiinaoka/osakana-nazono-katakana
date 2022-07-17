import { ReactNode } from 'react'
import { Fish } from '@/types/Fish'

/**
 * FishesContextの初期化で渡す値です。dataがnullableなのは必ずしもデータを受け取れるわけではないからです。
 */
export type FishesContextProps = {
  data?: Array<Fish>
  isLoading: boolean
  isError: boolean
}

/**
 * FisheContextProviderが引数に受け取る値です。ReactNodeが来ます。
 */
export type FishesContextProviderProps = {
  children: ReactNode
}
