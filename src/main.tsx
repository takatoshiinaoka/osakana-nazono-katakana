import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { FishesProvider } from '@/contexts/FishesContext'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FishesProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </FishesProvider>
  </React.StrictMode>
)
