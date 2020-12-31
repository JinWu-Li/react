import React, { useState } from 'react'

function App1() {
  const [total, setTotal] = useState(999)

  return <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
}

export default App1
