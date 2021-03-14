import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import colors from 'utils/colors'

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

export default function Dropdown (props) {
  const [value, setValue] = React.useState()
  const [prevValue, setPrevValue] = React.useState()
  const [darkMode] = React.useState(false)
  const hangleChange = React.useCallback((option) => {
    if (props.onChange) props.onChange(option)
  }, [props])

  React.useCallback(() => {
    if (props.value !== prevValue) {
      setPrevValue(props.value)
      if (props.value !== value) {
        setValue(props.value)
      }
    }
  }, [prevValue, props.value, value])

  return (
    <>
      <Select
        value={value}
        onChange={hangleChange}
        options={options}
        isSearchable={false}
        placeholder='Filter by Region'
        className='react-select-container'
        classNamePrefix="react-select"
      />
      <style jsx global>{`
        .react-select__placeholder {
          color: ${darkMode ? colors.white : colors.black};
        }
        .react-select__control {
          display: flex;
          height: 55px;
          padding: 0 5px;
          background-color: ${darkMode ? colors.oxfordBlue : colors.white};
          cursor: pointer;
          border-radius: 4px;
          border: 1px solid ${colors.selago};
          box-shadow: none;
        }
        .react-select__control:hover {
          border: 1px solid ${colors.cornflowerBlue};
        }
        .react-select__indicator-separator {
          display: none;
        }
        .react-select__dropdown-indicator {
          color: ${colors.cornflowerBlue};
        }
        .react-select__menu {
          padding: 0;
          background-color: ${darkMode ? colors.ebonyClay : colors.white};
          box-shadow: ${darkMode ? '0' : '0px 10px 20px rgba(72, 84, 159, 0.25)'};
        }
        .react-select__option {
          cursor: pointer;
          padding: 10px;
          border-bottom: 1px solid ${darkMode ? colors.mirage : colors.selago};
          color: ${darkMode ? colors.white : colors.black};
          background-color: ${darkMode ? colors.ebonyClay : 'white'};
        }
        .react-select__option:hover {
          background-color: ${colors.cornflowerBlue};
          color: ${colors.white};
        }
        .react-select__option:last-child {
          border: none;
        }
        body {
          background-color: ${darkMode ? '#212121' : 'white'};
        }
      `}</style>
    </>
  )
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}
