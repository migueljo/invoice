import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import styles, {
  typeOne as typeOneStyles,
  typeTwo as typeTwoStyles,
  typeThree as typeThreeStyles,
  typeFour as typeFourStyles
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
  icon: PropTypes.string // TODO: oneOf...
}

function TypeTwo ({ title, icon }) {
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
      <style jsx>{typeTwoStyles}</style>
    </>
  )
}

TypeTwo.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string // TODO: oneOf...
}

function TypeThree ({ title, icon }) {
  const [darkMode] = React.useState(true)
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
      <style jsx>{typeThreeStyles}</style>
    </>
  )
}

TypeThree.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string // TODO: oneOf...
}

function TypeFour ({ title, icon }) {
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
      <style jsx>{typeFourStyles}</style>
    </>
  )
}

TypeFour.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string // TODO: oneOf...
}

export default function Button ({ type, ...props }) {
  // TODO: use an enum here
  switch (type) {
    case 'one':
      return <TypeOne {...props} />
    case 'two':
      return <TypeTwo {...props} />
    case 'three':
      return <TypeThree {...props} />
    case 'four':
      return <TypeFour {...props} />
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string, // TODO: oneOf...
  type: PropTypes.string // TODO: oneOf...
}

Button.defaultProps = {
  type: 'one'
}
