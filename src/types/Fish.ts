interface Name {
  japanese: string
  english: {
    value: string
    furigana: string
  }
}

export interface Fish {
  id: string
  pk: 'fishes'
  class: 'fish' | 'shark' | 'mammalian'
  name: Name
  explanation: string
  imageUrl: string
}
