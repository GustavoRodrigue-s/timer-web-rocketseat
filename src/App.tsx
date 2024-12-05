import { AppProviders } from './components/providers'
import { AppRoutes } from './routes/AppRoutes'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
      <GlobalStyle />
    </AppProviders>
  )
}
