import PrimaryLayout from 'src/layouts/PrimaryLayout/PrimaryLayout'
import { useRequiresGit } from 'src/hooks/useRequiresGithub'

const DashboardPage = () => {
  useRequiresGit('github')

  return (
    <PrimaryLayout pageTitle="Dashboard">
      <div className="py-4">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>
    </PrimaryLayout>
  )
}

export default DashboardPage
