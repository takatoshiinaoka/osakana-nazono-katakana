import { Link } from 'react-router-dom'

export const Start = () => {
  return (
    <div>
      <div>Startコンポーネント</div>
      <Link to={{ pathname: '/' }} state={{ getby: 'derick' }}>
        もしかして：どりーさん
      </Link>
      <br />
      <Link
        to={{
          pathname: '/',
        }}
        state={{ getby: 'question', gameMode: 'marine-world' }}
      >
        Start
      </Link>
    </div>
  )
}
