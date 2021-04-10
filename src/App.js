import './bootstrap.min.css';
import './App.css';
import ChatPage from './views/home';
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from 'react'

function App() {
  const [uid, setUid] = useState("")

  useEffect(() => {
    const generateUUID = uuid()
    setUid(generateUUID)
  }, [])

  return (
    <div className="App">
      <ChatPage identifier={uid} />
    </div>
  );
}

export default App;
