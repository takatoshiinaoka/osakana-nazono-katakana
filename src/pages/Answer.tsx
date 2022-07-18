import { Fish } from '@/types/Fish'
import { GameMode } from '@/types/GameMode'
import { Link, useLocation } from 'react-router-dom'

type AnswerLocationState = {
  state: {
    gameMode: GameMode
    result: boolean
    fish: Fish
  }
}

export const Answer = () => {
  const { state } = useLocation() as AnswerLocationState
  const result = state.result

  return (
    <div>
      <img src={state.fish.imageUrl} width={400} />
      {result ? <div>正解</div> : <div>不正解</div>}
      <div>
        {state.fish.name_japanese}は{state.fish.name_english}です。
      </div>
      <div>
        <div>{state.fish.explanation}</div>
      </div>
      <Link
        to={{
          pathname: '/',
        }}
        state={{
          getby: 'question',
          gameMode: state.gameMode,
        }}
      >
        次の問題へ
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
