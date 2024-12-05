import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors.green500};
    }

    body {
      background-color: ${theme.colors.gray900};
      color: ${theme.colors.gray300};
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.fonts.primary}, sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }

    button {
      cursor: pointer;
    }
  `}
`
