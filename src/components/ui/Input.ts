import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${theme.colors.gray500};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${theme.colors.gray100};

    &:focus {
      box-shadow: none;
      border-color: ${theme.colors.green500};
    }

    &::placeholder {
      color: ${theme.colors.gray500};
    }
  `}
`
