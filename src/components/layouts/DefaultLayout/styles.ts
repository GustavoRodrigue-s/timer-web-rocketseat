import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    background-color: ${theme.colors.gray800};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
  `}
`
