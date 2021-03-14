import css from 'styled-jsx/css'
import colors from 'utils/colors'

export const typeOne = css`
  button {
    background-color: ${colors.cornflowerBlue};
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 8px;
    transition: opacity 300ms;
  }

  button:hover {
    opacity: 0.9;
  }

  .icon {
    margin-right: 16px;
    padding: 0;
  }
`

export const typeTwo = css`
  button {
    background-color: ${colors.cornflowerBlue};
    color: white;
    padding: 0 24px;
    transition: opacity 300ms;
  }

  button:hover {
    opacity: 0.9;
  }
`

export const typeThree = css`
  button {
    background-color: ${colors.whisper};
    color: ${colors.shipCove};
    padding: 0 24px;
    transition: background-color 300ms;
  }
  button:hover {
    background-color: ${colors.selago};
  }
  button.dark-mode {
    background-color: ${colors.ebonyClay};
    color: ${colors.selago};
  }
  button.dark-mode:hover {
    background-color: transparent;
  }
`

export const typeFour = css`
  button {
    background-color: ${colors.oxfordBlue};
    color: ${colors.baliHai};
    padding: 0 24px;
    transition: background-color 300ms;
  }
  button:hover {
    background-color: ${colors.vulcan};
  }
  button.dark-mode {
    background-color: ${colors.oxfordBlue};
    color: ${colors.selago};
  }
  button.dark-mode:hover {
    background-color: ${colors.mirage};
  }
`

export const typeFive = css`
  button {
    background-color: ${colors.burntSienna};
    color: white;
    padding: 0 24px;
    transition: opacity 300ms;
  }
  button:hover {
    opacity: 0.9;
  }
`

export const typeSix = css`
  button {
    background-color: ${colors.whisper};
    color: ${colors.shipCove};
    padding: 0 24px;
    transition: background-color 300ms;
  }
  button:hover {
    background-color: ${colors.selago};
  }
`

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
`
