import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      gap: 0.5rem;

      a {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${theme.colors.gray100};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
          border-bottom-color: ${theme.colors.green500};
        }

        &.active {
          color: ${theme.colors.green500};
        }
      }
    }
  `}
`
