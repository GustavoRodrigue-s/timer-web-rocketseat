import styled, { css, DefaultTheme } from 'styled-components'
import { Table } from '../../components/ui'

type StatusColor = 'yellow' | 'green' | 'red'
type ThemeColors = keyof DefaultTheme['colors']

const STATUS_COLORS: Record<StatusColor, ThemeColors> = {
  yellow: 'yellow500',
  green: 'green500',
  red: 'red500',
}

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Container = styled.main`
  ${({ theme }) => css`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
      color: ${theme.colors.gray100};
    }
  `}
`

export const CustomTableBody = styled(Table.Body)`
  ${Table.Td}:first-child {
    width: 50%;
  }
`

export const Status = styled.span<StatusProps>`
  ${({ theme, statusColor }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 9999px;
      background-color: ${theme.colors[STATUS_COLORS[statusColor]]};
    }
  `}
`
