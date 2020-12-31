import React, { useState } from 'react'

function ButtonTwo(props) {
  const [twoData, setTwoData] = useState('Twoo')
  return (
    <>
      <h1>ButtonTwo:{props.oneToTwoData}</h1>
      <button onClick={() => props.setChildData(twoData)}>Two</button>
    </>
  )
}

export default ButtonTwo
