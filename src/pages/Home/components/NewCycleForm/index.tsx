import { useFormContext } from 'react-hook-form'

import { useCyclesContext } from '../../../../contexts'

import * as S from './styles'

export const NewCycleForm: React.FC = () => {
  const { activeCycle } = useCyclesContext()
  const { register } = useFormContext()

  return (
    <S.Container>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Teste 1" />
        <option value="Teste 2" />
        <option value="Teste 3" />
        <option value="Teste 4" />
        <option value="Teste 5" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        max={60}
        min={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </S.Container>
  )
}
