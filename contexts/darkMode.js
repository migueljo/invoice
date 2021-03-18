import React from 'react'
import PropTypes from 'prop-types'

const DarkModeCtx = React.createContext()

export function DarkModeProvider ({ children }) {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <DarkModeCtx.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeCtx.Provider>
  )
}

DarkModeProvider.propTypes = {
  children: PropTypes.node
}

export function useDarkMode () {
  const { darkMode, setDarkMode } = React.useContext(DarkModeCtx)

  return { darkMode, setDarkMode }
}
