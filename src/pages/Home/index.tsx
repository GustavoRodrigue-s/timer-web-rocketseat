import { HandPalm, Play } from 'phosphor-react'

import { useCyclesContext } from '../../contexts'

import { Button } from '../../components/ui'
import { useNewCycleForm } from './hooks'

import * as S from './styles'
import { Countdown, NewCycleForm } from './components'
import { FormProvider } from 'react-hook-form'

export const Home: React.FC = () => {
  const { activeCycle, createNewCycle, interruptActiveCycle } =
    useCyclesContext()

  const { newCycleForm, isSubmitButtonDisabled, handleSubmit, handleReset } =
    useNewCycleForm(createNewCycle, interruptActiveCycle)

  return (
    <S.Container>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <Button key="interrupt" type="reset" variant="danger">
            <HandPalm size={20} />
            Interromper
          </Button>
        ) : (
          <Button key="start" type="submit" disabled={isSubmitButtonDisabled}>
            <Play size={20} />
            Começar
          </Button>
        )}
      </form>
    </S.Container>
  )
}
