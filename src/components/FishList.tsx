import { Fish } from '@/types/Fish'

interface Props {
  fishes: Array<Fish>
}

export const FishList = (props: Props) => {
  const fishItems = props.fishes.map((fish) => (
    <li key={fish.id}>
      <p>ID: {fish.id}</p>
      <p>プライマリーキー: {fish.pk}</p>
      <p>分類: {fish.class}</p>
      <p>日本語: {fish.name.japanese}</p>
      <p>英語: {fish.name.english}</p>
      <p>カタカナ: {fish.name.katakana}</p>
      <p>解説: {fish.explanation}</p>
      <img src={fish.imageUrl} />
    </li>
  ))

  return <ul>{fishItems}</ul>
}
