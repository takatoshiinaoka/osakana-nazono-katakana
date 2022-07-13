import { Fish } from '@/types/Fish'

export const fetchFishes = async (
  setFishes: React.Dispatch<React.SetStateAction<Array<Fish>>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const res = await fetch('/api/fishes')
  const fishes = await res.json()

  setFishes(fishes)
  setLoading(false)
}
