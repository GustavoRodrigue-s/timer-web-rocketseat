import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'
import logo from '../../../assets/Logo.svg'

import * as S from './styles'

export const Header: React.FC = () => (
  <S.Container>
    <img src={logo} alt="" />
    <nav>
      <NavLink to="/" title="Timer">
        <Timer size={24} />
      </NavLink>
      <NavLink to="/history" title="Histórico">
        <Scroll size={24} />
      </NavLink>
    </nav>
  </S.Container>
)
