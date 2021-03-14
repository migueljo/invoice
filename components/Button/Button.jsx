import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import styles, {
  typeOne as typeOneStyles,
  typeTwo as typeTwoStyles,
  typeThree as typeThreeStyles,
  typeFour as typeFourStyles,
  typeFive as typeFiveStyles,
  typeSix as typeSixStyles
} from './ButtonStyles'

function TypeOne ({ title, icon }) {
  return (
    <>
      <button>
        {
          icon && (
            <div className='icon'>
              <Icon name={icon} />
            </div>
          )
        }
        <span className="title">{title}</span>
      </button>
      <style jsx>{styles}</style>
      <style jsx>{typeOneStyles}</style>
    </>
  )
}
TypeOne.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

function TypeTwo ({ title }) {
  return (
    <>
      <button>
        <span className="title">{title}</span>
      </button>
      <style jsx>{styles}</style>
      <style jsx>{typeTwoStyles}</style>
    </>
  )
}

TypeTwo.propTypes = {
  title: PropTypes.string.isRequired
}

function TypeThree ({ title }) {
  const [darkMode] = React.useState(true)
  const btnClass = darkMode ? 'dark-mode' : ''

  return (
    <>
      <button className={btnClass}>
        <span className="title">{title}</span>
      </button>
      <style jsx>{styles}</style>
      <style jsx>{typeThreeStyles}</style>
    </>
  )
}

TypeThree.propTypes = {
  title: PropTypes.string.isRequired
}

function TypeFour ({ title }) {
  const [darkMode] = React.useState(false)
  const btnClass = darkMode ? 'dark-mode' : ''

  return (
    <>
      <button className={btnClass}>
        <span className="title">{title}</span>
      </button>
      <style jsx>{styles}</style>
      <style jsx>{typeFourStyles}</style>
    </>
  )
}

TypeFour.propTypes = {
  title: PropTypes.string.isRequired
}

function TypeFive ({ title }) {
  const [darkMode] = React.useState(false)
  const btnClass = darkMode ? 'dark-mode' : ''

  return (
    <>
      <button className={btnClass}>
        <span className="title">{title}</span>
      </button>
      <style jsx>{styles}</style>
      <style jsx>{typeFiveStyles}</style>
    </>
  )
}

TypeFive.propTypes = {
  title: PropTypes.string.isRequired
}

function TypeSix ({ title, icon }) {
  const [darkMode] = React.useState(false)
  const btnClass = darkMode ? 'dark-mode' : ''

  return (
    <>
      <button className={btnClass}>
        {
          icon && (
            <div className='icon'>
              <Icon name={icon} />
            </div>
          )
        }
        <span className="title">{title}</span>
      </button>
      <style jsx>{styles}</style>
      <style jsx>{typeSixStyles}</style>
    </>
  )
}

TypeSix.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export const BUTTON_TYPES = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five',
  six: 'six'
}

export default function Button ({ type, ...props }) {
  // TODO: use an enum here
  switch (type) {
    case BUTTON_TYPES.one:
      return <TypeOne {...props} />
    case BUTTON_TYPES.two:
      return <TypeTwo {...props} />
    case BUTTON_TYPES.three:
      return <TypeThree {...props} />
    case BUTTON_TYPES.four:
      return <TypeFour {...props} />
    case BUTTON_TYPES.five:
      return <TypeFive {...props} />
    case BUTTON_TYPES.six:
      return <TypeSix {...props} />
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string, // TODO: oneOf...
  type: PropTypes.oneOf(Object.keys(BUTTON_TYPES)) // TODO: oneOf...
}

Button.defaultProps = {
  type: BUTTON_TYPES.one
}
