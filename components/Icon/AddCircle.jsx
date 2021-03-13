import React from 'react'

export default function AddCircle () {
  return (
    <>
      <div className='container'>
        <svg
          width="11"
          height="11"
        >
          <path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero" />
        </svg>
      </div>
      <style jsx>{`
        .container {
          background-color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}
