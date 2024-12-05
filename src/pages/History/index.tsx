import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Table } from '../../components/ui'
import { useCyclesContext } from '../../contexts'

import { sortByLastCycles } from './utils'

import * as S from './styles'

export const History: React.FC = () => {
  const { cycles } = useCyclesContext()

  return (
    <S.Container>
      <h1>Meu histórico</h1>

      <Table.Root style={{ flex: 1, marginTop: '2rem' }}>
        <Table.Content minWidth={600}>
          <Table.Head>
            <Table.Tr>
              <Table.Th>Tarefa</Table.Th>
              <Table.Th>Duração</Table.Th>
              <Table.Th>Início</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Head>
          <S.CustomTableBody>
            {sortByLastCycles(cycles).map((cycle) => (
              <Table.Tr key={cycle.id}>
                <Table.Td>{cycle.task}</Table.Td>
                <Table.Td>{cycle.minutesAmount} minutos</Table.Td>
                <Table.Td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </Table.Td>
                <Table.Td>
                  {!!cycle.finishedCycle && (
                    <S.Status statusColor="green">Concluído</S.Status>
                  )}
                  {!!cycle.interruptedDate && (
                    <S.Status statusColor="red">Interrompido</S.Status>
                  )}
                  {!cycle.finishedCycle && !cycle.interruptedDate && (
                    <S.Status statusColor="yellow">Em andamento</S.Status>
                  )}
                </Table.Td>
              </Table.Tr>
            ))}
          </S.CustomTableBody>
        </Table.Content>
      </Table.Root>
    </S.Container>
  )
}
