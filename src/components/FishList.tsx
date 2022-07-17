import { Fish } from '@/types/Fish'

interface Props {
  fishes: Array<Fish>
}

/**
 * お魚を一覧表示するためのコンポーネント。使わない。
 * @param props fishes: Array<Fish>
 * @returns FishList
 */
export const FishList = (props: Props) => {
  const fishItems = props.fishes.map((fish) => (
    <li key={fish.id}>
      <p>ID: {fish.id}</p>
      <p>プライマリーキー: {fish.pk}</p>
      <p>分類: {fish.class}</p>
      <p>日本語: {fish.name_japanese}</p>
      <p>英語: {fish.name_english}</p>
      <p>カタカナ: {fish.name_katakana}</p>
      <p>解説: {fish.explanation}</p>
      <img src={fish.imageUrl} />
    </li>
  ))

  return <ul>{fishItems}</ul>
}
