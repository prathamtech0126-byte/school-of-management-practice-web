import { MOCK_CERTIFICATES } from '../../constants/mockData'
import { Card } from '../ui/Card'
import { PageHeader } from '../shared/PageHeader'
import { VerificationCodeBox } from '../shared/VerificationCodeBox'

const code = MOCK_CERTIFICATES[0]?.verificationCode ?? ''

export function VerificationCodeSection() {
  return (
    <Card className="h-full">
      <PageHeader
        title="Verification Code"
        subtitle="Share this code with third parties to verify your certificate."
      />
      <VerificationCodeBox code={code} copyButtonLabel="Copy Code" />
    </Card>
  )
}
