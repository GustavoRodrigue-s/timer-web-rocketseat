import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormEvent } from 'react'

const newCycleFormSchema = z.object({
  task: z.string().min(1),
  minutesAmount: z.number().min(5).max(60),
})

type NewCycleFormData = z.infer<typeof newCycleFormSchema>

export const useNewCycleForm = (
  createNewCycle: (cycleData: NewCycleFormData) => void,
  interruptActiveCycle: () => void,
) => {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { watch, reset, handleSubmit } = newCycleForm

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  const handleCreateNewCycle = (cycleData: NewCycleFormData) => {
    createNewCycle(cycleData)
    reset()
  }

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    interruptActiveCycle()
  }

  return {
    newCycleForm,
    isSubmitButtonDisabled,
    handleReset,
    handleSubmit: handleSubmit(handleCreateNewCycle),
  }
}
