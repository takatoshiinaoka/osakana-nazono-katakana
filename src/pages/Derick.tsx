import { Link } from 'react-router-dom'

export const Derick = () => {
  return (
    <div>
      <p>どりーさん専用ページ</p>
      <Link
        to={{ pathname: '/' }}
        state={{ getby: 'question', gameMode: 'marine-world' }}
      >
        マリンワールドモード
      </Link>
      <Link
        to={{ pathname: '/' }}
        state={{ getby: 'question', gameMode: 'shark' }}
      >
        サメモード
      </Link>
    </div>
  )
}
