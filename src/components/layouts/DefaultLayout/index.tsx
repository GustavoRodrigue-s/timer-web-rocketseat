import { Outlet } from 'react-router-dom'

import { Header } from '../../business'

import * as S from './styles'

export const DefaultLayout: React.FC = () => (
  <S.Container>
    <Header />
    <Outlet />
  </S.Container>
)
