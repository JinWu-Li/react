import React, { useState } from 'react'
// 需要額外安裝用 `yarn add prop-types`
import PropTypes from 'prop-types'

function Converter(props) {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onchange={() => {
          setInputValue(event.target.value)
        }}
      />
    </>
  )
}

// props的類型檢查用
Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

// 預設的props值(沒給定時)
Title.defaultProps = {
  text: '沒文字',
  color: 'blue',
}

export default Converter
