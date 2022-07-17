import { Link } from 'react-router-dom'

export const Start = () => {
  return (
    <div>
      <Link to={{ pathname: '/' }} state={{ getby: 'derick' }}>
        もしかして、どりーさん？
      </Link>
      <br />
      <Link
        to={{
          pathname: '/',
        }}
        state={{ getby: 'question', gameMode: 'marine-world' }}
      >
        クイズスタート
      </Link>
    </div>
  )
}
