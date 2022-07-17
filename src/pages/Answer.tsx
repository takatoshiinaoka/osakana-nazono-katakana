import { Link } from 'react-router-dom'

export const Answer = () => {
  return (
    <div>
      <div>Answerコンポーネント</div>
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
