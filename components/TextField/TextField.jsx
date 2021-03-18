import React from 'react'

import { useDarkMode } from 'contexts/darkMode'

import styles from './TextFieldStyles'

function TextField () {
  const { darkMode } = useDarkMode()

  return (
    <>
      <div className="container">
        <label htmlFor="id">Label</label>
        <input type="text" id="id" className={darkMode ? 'dark-mode' : ''} />
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{`
        body {
          background-color: ${darkMode ? '#212121' : 'white'};
        }  
      `}</style>
    </>
  )
}

export default TextField
