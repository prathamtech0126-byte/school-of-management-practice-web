export interface User {
  id: string
  name: string
  company: string
  role: 'admin' | 'client'
  isVerified: boolean
  avatarUrl?: string
}
