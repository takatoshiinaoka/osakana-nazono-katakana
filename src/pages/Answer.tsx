import { Link } from 'react-router-dom'

export const Answer = () => {
  return (
    <div>
      <div>Answerコンポーネント</div>
      <Link
        to={{
          pathname: '/',
        }}
        state={{
          getby: 'question',
        }}
      >
        次の問題
      </Link>
      <br />
      <Link
        to={{
          pathname: '/',
        }}
      >
        Topへ戻る
      </Link>
    </div>
  )
}
