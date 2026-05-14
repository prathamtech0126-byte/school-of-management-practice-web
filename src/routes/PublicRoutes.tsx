import { Route } from 'react-router-dom'
import { PublicLayout } from '../components/layout/PublicLayout'
import { About } from '../pages/public/About'
import { Help } from '../pages/public/Help'
import { HowItWorksPage } from '../pages/public/HowItWorksPage'
import { VerifyCertificateEntry } from '../pages/public/VerifyCertificateEntry'

export const publicRoutes = (
  <Route path="/verify" element={<PublicLayout />}>
    <Route index element={<VerifyCertificateEntry />} />
    <Route path="how-it-works" element={<HowItWorksPage />} />
    <Route path="about" element={<About />} />
    <Route path="help" element={<Help />} />
  </Route>
)
