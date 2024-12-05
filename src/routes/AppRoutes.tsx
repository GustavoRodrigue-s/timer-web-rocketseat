import { BrowserRouter, Route, Routes } from 'react-router-dom'

import * as P from '../pages'
import { DefaultLayout } from '../components/layouts'

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<P.Home />} />
        <Route path="/history" element={<P.History />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
