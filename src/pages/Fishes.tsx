import { FishList } from '@/components/FishList'
import { Loading } from '@/components/Loading'
import { FishesContext } from '@/contexts/FishesContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

/**
 * お魚を全権取得して一覧表示するコンポーネント。
 * @returns FishList | Loading | HTMLDivElement
 */
export const Fishes = () => {
  const { data, isLoading, isError } = useContext(FishesContext)

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
