import { produce } from 'immer'

import { ICycle } from '../../types'
import { Action, ActionTypes } from './actions'

interface CyclesState {
  cycles: ICycle[]
  activeCycle: ICycle | null
}

export const cyclesReducer = (
  state: CyclesState,
  action: Action,
): CyclesState => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycle = action.payload.newCycle
      })
    case ActionTypes.INTERRUPT_ACTIVE_CYCLE: {
      const activeCycleIndex = state.cycles.findIndex(
        ({ id }) => id === state.activeCycle?.id,
      )

      if (activeCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[activeCycleIndex].interruptedDate = new Date()
        draft.activeCycle = null
      })
    }
    case ActionTypes.FINISH_ACTIVE_CYCLE: {
      const activeCycleIndex = state.cycles.findIndex(
        ({ id }) => id === state.activeCycle?.id,
      )

      if (activeCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[activeCycleIndex].finishedCycle = new Date()
        draft.activeCycle = null
      })
    }
    default:
      return state
  }
}
