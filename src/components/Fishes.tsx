import { useContext } from 'react'
import { FishesContext } from '../contexts/FishContext'
import { FishList } from './FishList'
import { Loading } from './Loading'

export const Fishes = () => {
  const { fishes, loading } = useContext(FishesContext)

  return <div>{loading ? <Loading /> : <FishList fishes={fishes} />}</div>
}
