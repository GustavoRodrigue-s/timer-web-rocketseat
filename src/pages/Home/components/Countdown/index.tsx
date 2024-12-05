import { useEffect } from 'react'

import { useCountdown } from '../../hooks'
import { useCyclesContext } from '../../../../contexts'

import * as S from './styles'
import { addMinutes } from 'date-fns'

export const Countdown: React.FC = () => {
  const { activeCycle, finishActiveCycle } = useCyclesContext()

  const activeCycleEndDate = activeCycle
    ? addMinutes(activeCycle.startDate, activeCycle.minutesAmount)
    : new Date()

  const { minutes, seconds, reset } = useCountdown(
    activeCycleEndDate,
    undefined,
    finishActiveCycle,
  )

  useEffect(() => {
    if (minutes === '00' && seconds === '00') {
      document.title = 'Timer'
    } else {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds])

  useEffect(() => {
    return () => {
      document.title = 'Timer'
    }
  }, [])

  useEffect(() => {
    const isCountdownRunning = minutes !== '00' || seconds !== '00'
    const isInterrupted = !activeCycle && isCountdownRunning

    if (isInterrupted) {
      reset()
    }
  }, [activeCycle, reset, minutes, seconds])

  return (
    <S.Container>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separator>:</S.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.Container>
  )
}
