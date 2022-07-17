import { FishesContext } from '@/contexts/FishesContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export const Question = () => {
  const { data } = useContext(FishesContext)
  // const { gameMode } = useContext(GameContext) TODO: useContextでゲームモードを管理できるようにする
  const gameMode = 'shark'

  if (data === undefined) return <div>オフラインのようです。。</div>
  const shark = data.filter((n) => n.class === gameMode)
  const fish = shark[Math.floor(Math.random() * data.length)]

  return (
    <div>
      <div>Questionコンポーネント</div>
      <p>{fish.name_japanese}の英名は？</p>
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
