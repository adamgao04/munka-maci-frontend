import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("Connecting...")

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Backend unreachable"))
  }, [])

  return (
    <div>
      <h1>Munkamaci Frontend</h1>
      <p>Status: <strong>{message}</strong></p>
    </div>
  )
}

export default App