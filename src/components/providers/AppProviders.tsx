import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../styles/themes'
import { CyclesContextProvider } from '../../contexts'

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <CyclesContextProvider>{children}</CyclesContextProvider>
  </ThemeProvider>
)
