import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${({ theme }) => theme.COLORS.TEXT};
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 0.3px;
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