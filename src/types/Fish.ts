type PK = 'fishes'

type Class = 'fish' | 'shark' | 'mammalian'

type Name = {
  japanese: string
  english: string
  katakana: string
}

export type Fish = {
  id: string
  pk: PK
  class: Class
  name: Name
  explanation: string
  imageUrl: string
}
