import { FishList } from '@/components/FishList'
import { Loading } from '@/components/Loading'
import { useFetch } from '@/hooks/useFetch'
import { Fish } from '@/types/Fish'
import { Link } from 'react-router-dom'

/**
 * お魚を全権取得して一覧表示するコンポーネント。今回のアプリでは使わない。
 * @returns FishList | Loading | HTMLDivElement
 */
export const Fishes = () => {
  const { data, isLoading, isError } = useFetch<Array<Fish>>(
    `${import.meta.env.VITE_API_HOST}/api/fishes`
  )

  if (isError) {
    return <div>エラーが発生しました。。</div>
  }

  if (!data || isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Link
        to={{
          pathname: `/`,
        }}
      >
        戻る
      </Link>
      <FishList fishes={data} />
    </div>
  )
}
