/**
 * プライマリキーです。全権取得のために設定しています。値の意味は特にありませんが、すべてのレコードに同じものが登録されている必要があります。
 */
type PK = 'fishes'

/**
 * 分類です。ゲームモードの切り替え時にこの値を使って計算します。fishは魚、sharkはサメ、mammalianは哺乳類を表します。追加しても構いません。TODO: allはモードで定義する。
 */
type Class = 'fish' | 'shark' | 'mammalian'

/**
 * 名前です。日本語名、英語名、カタカナを持っています。
 */
type Name = {
  japanese: string
  english: string
  katakana: string
}

/**
 * お魚です。idはCosmosDBからの自動採番。pkはPK、classはClass、nameはName、explanationには解説文、imageUrlにはBlob Storgeにある魚の画像URLが入ります。これらの型はCosmosDBのデータ構造に従います。
 */
export type Fish = {
  id: string
  pk: PK
  class: Class
  name: Name
  explanation: string
  imageUrl: string
}
