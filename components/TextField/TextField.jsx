import React from 'react'

import styles from './TextFieldStyles'

function TextField () {
  return (
    <>
      <div className="container">
        <label htmlFor="id">Label</label>
        <input type="text" id="id" />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default TextField
