import React from 'react'
import Head from 'next/head'
import Button from 'components/Button'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Invoice</title>
      </Head>
      <div className='container'>
        <Button title="New Invoice" icon="add-circle" />
        <Button title="New Invoice" type="two" />
        <Button title="New Invoice" type="three" />
        <Button title="New Invoice" type="four" />
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
