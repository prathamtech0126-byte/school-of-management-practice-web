import { Navigate, Route } from 'react-router-dom'
import { AdminLayout } from '../components/layout/AdminLayout'
import { AdminAuthProvider } from '../context/AdminAuthProvider'
import { AdminApplications } from '../pages/admin/AdminApplications'
import { AdminAuditLogs } from '../pages/admin/AdminAuditLogs'
import { AdminCertificates } from '../pages/admin/AdminCertificates'
import { AdminDashboard } from '../pages/admin/AdminDashboard'
import { AdminReports } from '../pages/admin/AdminReports'
import { AdminSettings } from '../pages/admin/AdminSettings'
import { AdminThirdParties } from '../pages/admin/AdminThirdParties'
import { AdminUsers } from '../pages/admin/AdminUsers'
import { AdminVerificationLogs } from '../pages/admin/AdminVerificationLogs'

export const adminRoutes = (
  <Route
    path="/admin"
    element={
      <AdminAuthProvider>
        <AdminLayout />
      </AdminAuthProvider>
    }
  >
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="certificates" element={<AdminCertificates />} />
    <Route path="applications" element={<AdminApplications />} />
    <Route path="users" element={<AdminUsers />} />
    <Route path="third-parties" element={<AdminThirdParties />} />
    <Route path="logs" element={<AdminVerificationLogs />} />
    <Route path="settings" element={<AdminSettings />} />
    <Route path="audit-logs" element={<AdminAuditLogs />} />
    <Route path="reports" element={<AdminReports />} />
  </Route>
)
