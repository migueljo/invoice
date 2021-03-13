import React from 'react'
import PropTypes from 'prop-types'
import AddCircle from './AddCircle'

const MAP = {
  'add-circle': AddCircle
}

function Icon ({ name, ...props }) {
  if (!MAP[name]) throw new Error(`Icon ${name} does not exist.`)

  const Icon = MAP[name]

  return <Icon {...props} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon
