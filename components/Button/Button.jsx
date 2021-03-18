import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import { useDarkMode } from 'contexts/darkMode'

import styles from './ButtonStyles'

export const BUTTON_TYPES = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five',
  six: 'six'
}

const getClassName = (className, darkMode) => `${className}${darkMode ? ' dark-mode' : ''}`

const classNames = {
  one: (darkMode) => ({
    button: getClassName('button-one', darkMode),
    title: getClassName('title-one', darkMode),
    icon: getClassName('icon-one', darkMode)
  }),
  two: (darkMode) => ({
    button: getClassName('button-two', darkMode),
    title: getClassName('title-two', darkMode),
    icon: getClassName('icon-two', darkMode)
  }),
  three: (darkMode) => ({
    button: getClassName('button-three', darkMode),
    title: getClassName('title-three', darkMode),
    icon: getClassName('icon-three', darkMode)
  }),
  four: (darkMode) => ({
    button: getClassName('button-four', darkMode),
    title: getClassName('title-four', darkMode),
    icon: getClassName('icon-four', darkMode)
  }),
  five: (darkMode) => ({
    button: getClassName('button-five', darkMode),
    title: getClassName('title-five', darkMode),
    icon: getClassName('icon-five', darkMode)
  }),
  six: (darkMode) => ({
    button: getClassName('button-six', darkMode),
    title: getClassName('title-six', darkMode),
    icon: getClassName('icon-six', darkMode)
  })
}

export default function Button ({ type, title, icon, ...props }) {
  const { darkMode } = useDarkMode()
  const classesType = classNames[type](darkMode)

  return (
    <>
      <button className={classesType.button} {...props}>
        {
          icon && (
            <div className={classesType.icon}>
              <Icon name={icon} />
            </div>
          )
        }
        <span className={classesType.title}>{title}</span>
      </button>
      <style jsx>{styles}</style>
    </>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(BUTTON_TYPES))
}

Button.defaultProps = {
  type: BUTTON_TYPES.one
}
