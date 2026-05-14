import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { adminRoutes } from './AdminRoutes'
import { marketingRoutes } from './MarketingRoutes'
import { publicRoutes } from './PublicRoutes'
import { userRoutes } from './UserRoutes'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {marketingRoutes}
        {adminRoutes}
        {userRoutes}
        {publicRoutes}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
