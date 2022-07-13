import { useContext } from 'react'
import { FishesContext } from '../contexts/FishContext'
import { FishList } from './FishList'
import { Loading } from './Loading'

export const Fishes = () => {
  const { fishes, loading } = useContext(FishesContext)

  if (loading) {
    return <Loading />
  }

  return <FishList fishes={fishes} />
}
