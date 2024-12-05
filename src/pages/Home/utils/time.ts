const SECONDS_IN_A_MINUTE = 60
const SECONDS_IN_AN_HOUR = 60 * SECONDS_IN_A_MINUTE
const SECONDS_IN_A_DAY = 24 * SECONDS_IN_AN_HOUR

export const calculateDays = (seconds: number) =>
  Math.floor(seconds / SECONDS_IN_A_DAY)

export const calculateHours = (seconds: number) =>
  Math.floor((seconds % SECONDS_IN_A_DAY) / SECONDS_IN_AN_HOUR)

export const calculateMinutes = (seconds: number) =>
  Math.floor((seconds % SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE)

export const calculateSeconds = (seconds: number) =>
  seconds % SECONDS_IN_A_MINUTE
