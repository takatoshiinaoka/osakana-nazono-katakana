import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { FishesProvider } from '@/contexts/FishesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FishesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </FishesProvider>
  </React.StrictMode>
)
