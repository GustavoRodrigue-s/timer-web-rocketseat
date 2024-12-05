import styled, { css } from 'styled-components'
import { Modifiers } from '../../types'

type Variant = 'primary' | 'danger'

interface ButtonProps {
  variant?: Variant
}

const variantModifiers: Modifiers<Variant> = {
  primary: (theme) => css`
    background-color: ${theme.colors.green500};

    &:hover:not(&[disabled]) {
      background-color: ${theme.colors.green700};
    }
  `,
  danger: (theme) => css`
    background-color: ${theme.colors.red500};

    &:hover:not(&[disabled]) {
      background-color: ${theme.colors.red700};
    }
  `,
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant = 'primary' }) => css`
    width: 100%;
    color: ${theme.colors.gray100};
    border: none;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    text-align: center;
    font-weight: bold;
    transition: background-color 0.2s;

    &[disabled] {
      opacity: 0.7;
      cursor: not-allowed;
    }

    ${variantModifiers[variant](theme)};
  `}
`
