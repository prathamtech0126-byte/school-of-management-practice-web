import { Navigate, Route } from 'react-router-dom'
import { UserLayout } from '../components/layout/UserLayout'
import { UserCertificates } from '../pages/user/UserCertificates'
import { UserDashboard } from '../pages/user/UserDashboard'
import { UserProfile } from '../pages/user/UserProfile'
import { UserSupport } from '../pages/user/UserSupport'

export const userRoutes = (
  <Route path="/portal" element={<UserLayout />}>
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<UserDashboard />} />
    <Route path="certificates" element={<UserCertificates />} />
    <Route path="profile" element={<UserProfile />} />
    <Route path="support" element={<UserSupport />} />
  </Route>
)
