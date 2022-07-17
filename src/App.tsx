import { Fishes } from '@/components/Fishes'
import { Link, useLocation } from 'react-router-dom'

type State = {
  state: {
    getby: string
  }
}

function App() {
  const { state } = useLocation() as State
  if (state === null) {
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
  const switchTabs = () => {
    switch (state.getby) {
      case 'start':
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
      case 'question':
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
      case 'answer':
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
      default:
        return <Fishes />
    }
  }
  return <>{switchTabs()}</>
}

export default App
