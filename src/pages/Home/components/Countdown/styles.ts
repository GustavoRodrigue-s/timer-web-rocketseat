import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary}, monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${theme.colors.gray100};

    display: flex;
    gap: 1rem;

    span {
      background-color: ${theme.colors.gray700};
      padding: 2rem 1rem;
      border-radius: 8px;
    }
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    color: ${theme.colors.green500};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
  `}
`
