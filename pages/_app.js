import 'styles/globals.css'
import React from 'react'
import { DarkModeProvider } from 'contexts/darkMode'

function MyApp ({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

export default MyApp
