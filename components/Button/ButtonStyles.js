import css from 'styled-jsx/css'
import colors from 'utils/colors'

export default css`
  button {
    border: 0;
    outline: transparent;
    height: 48px;
    border-radius: 24px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  .button-one {
    background-color: ${colors.cornflowerBlue};
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 8px;
    transition: opacity 300ms;
  }

  .button-one:hover {
    opacity: 0.9;
  }

  .icon-one {
    margin-right: 16px;
    padding: 0;
  }

  .button-two {
    background-color: ${colors.cornflowerBlue};
    color: white;
    padding: 0 24px;
    transition: opacity 300ms;
  }

  .button-two:hover {
    opacity: 0.9;
  }

  .button-three {
    background-color: ${colors.whisper};
    color: ${colors.shipCove};
    padding: 0 24px;
    transition: background-color 300ms;
  }
  .button-three:hover {
    background-color: ${colors.selago};
  }
  .button-three.dark-mode {
    background-color: ${colors.ebonyClay};
    color: ${colors.selago};
  }
  .button-three.dark-mode:hover {
    background-color: transparent;
  }

  .button-four {
    background-color: ${colors.oxfordBlue};
    color: ${colors.baliHai};
    padding: 0 24px;
    transition: background-color 300ms;
  }
  .button-four:hover {
    background-color: ${colors.vulcan};
  }
  .button-four.dark-mode {
    background-color: ${colors.oxfordBlue};
    color: ${colors.selago};
  }
  .button-four.dark-mode:hover {
    background-color: ${colors.mirage};
  }

  .button-five {
    background-color: ${colors.burntSienna};
    color: white;
    padding: 0 24px;
    transition: opacity 300ms;
  }
  .button-five:hover {
    opacity: 0.9;
    background-color: ${colors.burntSienna};
  }

  .button-six {
    background-color: ${colors.whisper};
    color: ${colors.shipCove};
    padding: 0 24px;
    transition: background-color 300ms;
  }
  .button-six:hover {
    background-color: ${colors.selago};
  }
`
