import { Route } from 'react-router-dom'
import { MarketingLayout } from '../components/marketing/layout/MarketingLayout'
import { AboutUsPage } from '../pages/marketing/AboutUsPage'
import { ContactUsPage } from '../pages/marketing/ContactUsPage'
import { CoursesListPage } from '../pages/marketing/CoursesListPage'
import { MarketingHomePage } from '../pages/marketing/MarketingHomePage'

export const marketingRoutes = (
  <Route path="/" element={<MarketingLayout />}>
    <Route index element={<MarketingHomePage />} />
    <Route path="courses" element={<CoursesListPage />} />
    <Route path="about" element={<AboutUsPage />} />
    <Route path="contact" element={<ContactUsPage />} />
  </Route>
)
