import css from 'styled-jsx/css'
import colors from 'utils/colors'

export default css`
  .container {

  }

  label {
    color: ${colors.shipCove};
    display: block;
    margin-bottom: 10px;
  }

  input {
    background-color: ${colors.white};
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid ${colors.selago};
    height: 48px;
    padding: 0 20px;
    color: ${colors.vulcan};
    font-weight: bold;
    outline: transparent;
  }
  input:focus {
    border-color: ${colors.heliotrope};
  }
  input.dark-mode {
    background-color: ${colors.mirage};
    border-color: ${colors.ebonyClay};
    color: ${colors.white};
  }
`
