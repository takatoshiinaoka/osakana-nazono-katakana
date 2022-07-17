import { useLocation } from 'react-router-dom'
import { Top } from '@/pages/Top'
import { Start } from '@/pages/Start'
import { Derick } from '@/pages/Derick'
import { Question } from '@/pages/Question'
import { Answer } from '@/pages/Answer'
import { Fishes } from '@/pages/Fishes'

// 参考にしたサイト：https://dev.to/aasthapandey/stop-url-from-changing-using-react-router-81n

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
