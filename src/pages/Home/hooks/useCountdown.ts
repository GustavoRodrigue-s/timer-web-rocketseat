import { differenceInSeconds } from 'date-fns'
import { useCallback, useEffect, useState } from 'react'

import {
  calculateDays,
  calculateHours,
  calculateMinutes,
  calculateSeconds,
} from '../utils'

const formatTime = (amount: number) => amount.toString().padStart(2, '0')

export const useCountdown = (
  endDate: Date,
  started?: () => void,
  finished?: () => void,
) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(() =>
    differenceInSeconds(endDate, new Date()),
  )

  const reset = useCallback(() => {
    setSecondsLeft(0)
  }, [])

  useEffect(() => {
    if (endDate <= new Date()) return

    const startDate = new Date()
    const initialSecondsLeft = differenceInSeconds(endDate, startDate)

    setSecondsLeft(initialSecondsLeft)
    started?.()

    const id = setInterval(() => {
      const secondsLeft = differenceInSeconds(endDate, new Date())

      if (secondsLeft <= 0) {
        clearInterval(id)
        setSecondsLeft(0)
        finished?.()
      } else {
        setSecondsLeft(secondsLeft)
      }
    }, 1000)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate])

  return {
    days: formatTime(calculateDays(secondsLeft)),
    hours: formatTime(calculateHours(secondsLeft)),
    minutes: formatTime(calculateMinutes(secondsLeft)),
    seconds: formatTime(calculateSeconds(secondsLeft)),
    reset,
  }
}
