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
    border: 1px solid ${colors.selago};
    box-sizing: border-box;
    border-radius: 4px;
    height: 48px;
    padding: 0 20px;
    color: ${colors.vulcan};
    font-weight: bold;
    outline: transparent;
  }
  input:focus {
    border-color: ${colors.heliotrope};
  }
`
