import { Link } from 'react-router-dom'

export const Question = () => {
  return (
    <div>
      <div>Questionコンポーネント</div>
      <Link
        to={{
          pathname: '/',
        }}
        state={{
          getby: 'answer',
        }}
      >
        解答ボタンA
      </Link>
    </div>
  )
}
