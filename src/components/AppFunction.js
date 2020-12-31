import React, { useState } from 'react'

function AppFunction(props) {
  const [total, setTotal] = useState(props.initValue)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>

      <ul>
        <li key="a1">123</li>
        <li>456</li>
      </ul>
    </>
  )
}

export default AppFunction
