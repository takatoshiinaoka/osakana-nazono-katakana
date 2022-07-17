import { Link } from 'react-router-dom'

export const Top = () => {
  return (
    <div>
      <div>Topコンポーネントをここに置きます</div>
      <Link
        to={{
          pathname: `/`,
        }}
        state={{
          getby: 'start',
        }}
      >
        Start
      </Link>
      <br />
      <Link
        to={{
          pathname: `/`,
        }}
        state={{
          getby: 'question',
        }}
      >
        Quesion
      </Link>
      <br />
      <Link
        to={{
          pathname: `/`,
        }}
        state={{
          getby: 'answer',
        }}
      >
        Answer
      </Link>
      <br />
      <Link
        to={{
          pathname: `/`,
        }}
        state={{
          getby: '',
        }}
      >
        Default
      </Link>
    </div>
  )
}
