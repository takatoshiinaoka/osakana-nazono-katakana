import { useContext } from 'react'
import { FishesContext } from '@/contexts/FishContext'
import { FishList } from '@/components/FishList'
import { Loading } from '@/components/Loading'

export const Fishes = () => {
  const { fishes, loading } = useContext(FishesContext)

  if (loading) {
    return <Loading />
  }

  return <FishList fishes={fishes} />
}
