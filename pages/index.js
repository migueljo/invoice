import React from 'react'
import Head from 'next/head'

import Button from 'components/Button'
import TextField from 'components/TextField'
import Dropdown from 'components/Dropdown/Dropdown'
import { useDarkMode } from 'contexts/darkMode'

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

export default function Home () {
  const { setDarkMode, darkMode } = useDarkMode()

  return (
    <div>
      <Head>
        <title>Invoice</title>
      </Head>
      <div className='container'>
        <Button title="Toggle dark mode" onClick={() => setDarkMode(!darkMode)} />
        <TextField />
        <br />
        <div style={{ width: '220px' }}>
          <Dropdown options={options} />
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
