import { Link } from 'react-router-dom'

export const Derick = () => {
  return (
    <div>
      <p>どりーさん専用ページ</p>
      <Link to={{ pathname: '/' }} state={{ getby: 'question' }}>
        マリンワールドモード
      </Link>
      <Link to={{ pathname: '/' }} state={{ getby: 'question' }}>
        サメモード
      </Link>
    </div>
  )
}
