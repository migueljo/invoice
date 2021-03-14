import React from 'react'
import Head from 'next/head'

import Button from 'components/Button'
import TextField from 'components/TextField'
import Dropdown from 'components/Dropdown/Dropdown'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Invoice</title>
      </Head>
      <div className='container'>
        <TextField />
        <br />
        <div style={{ width: '220px' }}>
          <Dropdown />
        </div>
        <br />
        <Button title="New Invoice" icon="add-circle" type="one" />
        <br />
        <Button title="New Invoice" type="two" />
        <br />
        <Button title="New Invoice" type="three" />
        <br />
        <Button title="New Invoice" type="four" />
        <br />
        <Button title="New Invoice" type="five" />
        <br />
        <Button title="New Invoice" type="six" />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  )
}
