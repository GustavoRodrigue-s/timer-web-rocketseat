import styled, { css } from 'styled-components'

interface ContentProps {
  minWidth: number
}

const Root = styled.div`
  flex: 1;
  overflow: auto;
`

const Content = styled.table<ContentProps>`
  width: 100%;
  border-collapse: collapse;
  min-width: ${({ minWidth }) => `${minWidth}px`};
`

const Head = styled.thead``

const Body = styled.tbody``

const Tr = styled.tr``

const Th = styled.th`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray600};
    padding: 1rem;
    text-align: left;
    color: ${theme.colors.gray100};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }
    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  `}
`

const Td = styled.td`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray700};
    border-top: 4px solid ${theme.colors.gray800};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      padding-left: 1.5rem;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  `}
`

export const Table = {
  Root,
  Content,
  Head,
  Body,
  Tr,
  Th,
  Td,
}
