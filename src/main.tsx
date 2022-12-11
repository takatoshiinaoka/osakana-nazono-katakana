import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { FishesProvider } from '@/contexts/FishesContext'
import { Box, ChakraProvider } from '@chakra-ui/react'
import seaImage from '~/sea.jpg'
import { registerSW } from 'virtual:pwa-register'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <FishesProvider>
        <Router>
          <Box
            bgImage={seaImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="100vh"
          >
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
          </Box>
        </Router>
      </FishesProvider>
    </ChakraProvider>
  </React.StrictMode>
)

// サービスワーカーを登録
registerSW()