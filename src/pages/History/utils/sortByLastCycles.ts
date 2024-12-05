import { ICycle } from '../../../types'

export const sortByLastCycles = (cycles: ICycle[]) => {
  return [...cycles].sort((a, b) => {
    if (new Date(a.startDate) < new Date(b.startDate)) return 1
    if (new Date(a.startDate) > new Date(b.startDate)) return -1
    return 0
  })
}
