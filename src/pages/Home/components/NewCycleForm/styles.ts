import styled, { css } from 'styled-components'

import { Input } from '../../../../components/ui'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${theme.colors.gray100};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
  `}
`

export const TaskInput = styled(Input)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(Input)`
  width: 4rem;
`
