import { Link } from 'react-router-dom'

export const Start = () => {
  return (
    <div>
      <div>Startコンポーネント</div>
      <Link
        to={{
          pathname: '/',
        }}
      >
        戻る
      </Link>
    </div>
  )
}
