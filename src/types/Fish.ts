type PK = 'fishes'

type Class = 'fish' | 'shark' | 'mammalian'

type Name = {
  japanese: string
  english: {
    value: string
    furigana: string
  }
}

export type Fish = {
  id: string
  pk: PK
  class: Class
  name: Name
  explanation: string
  imageUrl: string
}
