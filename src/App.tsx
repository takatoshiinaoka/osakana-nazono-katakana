import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

const fetchMessage = async (
  name: String,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const res = await fetch(`/api/SampleFunction?name=${name}`)
  const message = await res.text()
  setMessage(message)
}

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchMessage('inaoka', setMessage)
  }, [])

  return <div>{message}</div>
}

export default App
