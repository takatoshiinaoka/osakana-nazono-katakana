import { FishList } from '@/components/FishList'
import { Loading } from '@/components/Loading'
import { useFetch } from '@/hooks/useFetch'
import { Fish } from '@/types/Fish'

export const Fishes = () => {
  const { data, isLoading, isError } = useFetch<Array<Fish>>('/api/fishes')

  if (isError) {
    return <div>エラーが発生しました。。</div>
  }

  if (!data || isLoading) {
    return <Loading />
  }

  return <FishList fishes={data} />
}
