import { FishesContext } from '@/contexts/FishesContext'
import { Fish } from '@/types/Fish'
import { GameMode } from '@/types/GameMode'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

const isCurrected = (expected: string, actual: string) => {
  return expected === actual
}

/**
 * 受け取った配列をシャッフルします。
 * 引用元：https://www.nxworld.net/js-array-shuffle.html
 * @param param0 Array
 * @returns Array
 */
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

type QuestionLocationState = {
  state: {
    gameMode: GameMode
  }
}

/**
 * お魚データを取得してランダムに１つの魚データから問題文を計算する。
 * ゲームモードによってフィルターを掛ける。
 * 押した選択肢と英名を比較して等しければ正であり、等しくなければ負をAnswerにわたす。
 * @returns Questionコンポーネント
 */
export const Question = () => {
  const { data } = useContext(FishesContext)
  const { state } = useLocation() as QuestionLocationState
  const gameMode = state.gameMode
  console.log(gameMode)
  /**
   * TypeScriptのエラー避け
   */
  if (data === undefined) return <div>オフラインのようです。。</div>

  /**
   * ゲームモードに対して適当なフィルターを掛ける
   */
  let filterd_fishes: Fish[]
  switch (gameMode) {
    case 'marine-world':
      filterd_fishes = data
      break
    case 'shark':
      filterd_fishes = data.filter((n) => n.class === gameMode)
      break
    default:
      filterd_fishes = data
  }

  /**
   * ランダムに1つ選択する。
   */
  const fish = filterd_fishes[Math.floor(Math.random() * filterd_fishes.length)]

  /**
   * フェイクの選択肢用魚
   */
  const other_fish1 = filterd_fishes.filter(
    (f) => f.name_english !== fish.name_english
  )[Math.floor(Math.random() * filterd_fishes.length)]
  const other_fish2 = filterd_fishes.filter(
    (f) =>
      f.name_english !== fish.name_english &&
      f.name_english !== other_fish1.name_english
  )[Math.floor(Math.random() * filterd_fishes.length)]
  const other_fish3 = filterd_fishes.filter(
    (f) =>
      f.name_english !== fish.name_english &&
      f.name_english !== other_fish1.name_english &&
      f.name_english !== other_fish2.name_english
  )[Math.floor(Math.random() * filterd_fishes.length)]

  /**
   * シャッフルされた選択肢
   * フェイクが英名と同じなら他のお魚から名前を取ります。
   */
  const choices = shuffle([
    fish.name_english,
    fish.fake_english.toLocaleUpperCase() ===
    fish.name_english.toLocaleUpperCase()
      ? other_fish3.name_english
      : fish.fake_english,
    other_fish1.name_english,
    other_fish2.name_english,
  ])

  return (
    <div>
      <p>{fish.name_japanese}の英名は？</p>
      <ol>
        {choices.map((c, index) => {
          return (
            <li key={index}>
              <Link
                to={{
                  pathname: '/',
                }}
                state={{
                  getby: 'answer',
                  result: isCurrected(fish.name_english, c),
                  gameMode: state.gameMode,
                  fish: fish,
                }}
              >
                {c}
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
