import { Fishes } from '@/components/Fishes'
import { FishesProvider } from '@/contexts/FishContext'

function App() {
  return (
    <FishesProvider>
      <Fishes />
    </FishesProvider>
  )
}

export default App
