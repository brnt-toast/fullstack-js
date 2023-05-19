import React, { useEffect, useState } from 'react'

const URL = 'http://localhost:3999'

export default function App() {
  const [msg, setMsg] = useState(null)

  useEffect(()=>{
    fetch(URL)
      .then(response => response.text())
      .then(msg => setMsg(msg))
  },[])

  return (
    <>
        <h1>{msg}</h1>
    </>
  )
}
1