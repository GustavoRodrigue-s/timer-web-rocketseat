import { ICycle } from "../../types"

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_ACTIVE_CYCLE = 'INTERRUPT_ACTIVE_CYCLE',
  FINISH_ACTIVE_CYCLE = 'FINISH_ACTIVE_CYCLE'
}

export type Action =
  | {
      type: ActionTypes.ADD_NEW_CYCLE
      payload: {
        newCycle: ICycle
      }
    }
  | {
      type: ActionTypes.INTERRUPT_ACTIVE_CYCLE
    }
  | {
      type: ActionTypes.FINISH_ACTIVE_CYCLE
    }