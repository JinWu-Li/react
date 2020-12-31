import React, { useState } from 'react'

function ButtonOne(props) {
  const [oneData, setOneData] = useState('Onee')
  return (
    <>
      <h1>ButtonOne:{props.textData}</h1>
      <button onClick={() => props.setOneToTwoData(oneData)}>One</button>
    </>
  )
}

export default ButtonOne
