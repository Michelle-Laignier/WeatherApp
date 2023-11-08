import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BG};
    color: ${({ theme }) => theme.COLORS.TEXT};;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    transition: 0.3s;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  input:hover,
  input:focus {
    outline: 2px solid ${({ theme }) => theme.COLORS.TEXT_BTN_INPUT};
  }
`