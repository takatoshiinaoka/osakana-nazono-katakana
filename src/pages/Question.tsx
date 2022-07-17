import { Link } from 'react-router-dom'

export const Question = () => {
  return (
    <div>
      <div>Questionコンポーネント</div>
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
