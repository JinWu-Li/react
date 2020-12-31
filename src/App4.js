import React, { useState } from 'react'
import AppFunction from './components/AppFunction'
import AppClass from './components/AppClass'
import ColorTitle from './components/ColorTitle'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/ButtonTwo'
import Title from './components/Title'
function App() {
  const [appData, setAppData] = useState('AApp')
  const [childData, setChildData] = useState('')
  const [oneToTwoData, setOneToTwoData] = useState('')
  return (
    <>
      {/* <AppFunction initValue={99} />
      <AppClass initValue={98} /> */}
      {/* <ColorTitle color="red">彩色標題</ColorTitle> */}
      <h1>Ap:{childData}</h1>
      <ButtonOne textData={appData} setOneToTwoData={setOneToTwoData} />
      <ButtonTwo setChildData={setChildData} />
      <Title />
    </>
  )
}

export default App
