import { Fishes } from '@/components/Fishes'
import { useLocation } from 'react-router-dom'
import { Top } from '@/pages/Top'
import { Start } from '@/pages/Start'
import { Question } from '@/pages/Question'
import { Answer } from '@/pages/Answer'
import { Derick } from '@/pages/Derick'

type State = {
  state: {
    getby: string
  }
}

function App() {
  const { state } = useLocation() as State
  if (state === null) {
    return <Top />
  }
  const switchTabs = () => {
    switch (state.getby) {
      case 'start':
        return <Start />
      case 'derick':
        return <Derick />
      case 'question':
        return <Question />
      case 'answer':
        return <Answer />
      default:
        return <Fishes />
    }
  }
  return <>{switchTabs()}</>
}

export default App
