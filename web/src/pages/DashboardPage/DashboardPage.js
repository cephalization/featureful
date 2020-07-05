import { useAuth } from '@redwoodjs/auth'

import PrimaryLayout from 'src/layouts/PrimaryLayout/PrimaryLayout'

const DashboardPage = () => {
  const { currentUser } = useAuth()

  console.log({ currentUser })

  return (
    <PrimaryLayout pageTitle="Dashboard">
      <div className="py-4">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>
    </PrimaryLayout>
  )
}

export default DashboardPage
