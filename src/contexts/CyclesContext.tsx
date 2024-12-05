import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import { ICycle } from '../types'
import { cyclesReducer, ActionTypes } from '../reducers/cycles'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContext {
  cycles: ICycle[]
  activeCycle: ICycle | null
  createNewCycle: (cycleData: CreateCycleData) => void
  interruptActiveCycle: () => void
  finishActiveCycle: () => void
}

const STORAGE_KEY = '@timer:cyclesState:v1.0.0'

const CyclesContext = createContext({} as CyclesContext)

export const CyclesContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycle: null,
    },
    (initialState) => {
      const response = localStorage.getItem(STORAGE_KEY)
      return response ? JSON.parse(response) : initialState
    },
  )

  const { cycles, activeCycle } = cyclesState

  const createNewCycle = useCallback(
    ({ task, minutesAmount }: CreateCycleData) => {
      const cycle: ICycle = {
        id: new Date().getTime().toString(),
        task,
        minutesAmount,
        startDate: new Date(),
      }

      dispatch({
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
          newCycle: cycle,
        },
      })
    },
    [],
  )

  const interruptActiveCycle = useCallback(() => {
    if (activeCycle) {
      dispatch({ type: ActionTypes.INTERRUPT_ACTIVE_CYCLE })
    }
  }, [activeCycle])

  const finishActiveCycle = useCallback(() => {
    if (activeCycle) {
      dispatch({ type: ActionTypes.FINISH_ACTIVE_CYCLE })
    }
  }, [activeCycle])

  useEffect(() => {
    if (cyclesState) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cyclesState))
    }
  }, [cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        createNewCycle,
        interruptActiveCycle,
        finishActiveCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export const useCyclesContext = () => useContext(CyclesContext)
