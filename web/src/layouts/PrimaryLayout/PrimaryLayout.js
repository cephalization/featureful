import { useState } from 'react'
import PropTypes from 'prop-types'

import Navbar from 'src/components/Navbar/Navbar'
import Sidebar from 'src/components/Sidebar/Sidebar'

const PrimaryLayout = ({
  children,
  pageTitle,
  hideSidebar = false,
  hideSearch = false,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((o) => !o)

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {!hideSidebar && (
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Navbar
          hideSidebar={hideSidebar}
          hideSearch={hideSearch}
          toggleSidebar={toggleSidebar}
        />
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="pt-2 pb-6 md:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                {pageTitle}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

PrimaryLayout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
  hideSidebar: PropTypes.bool,
  hideSearch: PropTypes.bool,
}

export default PrimaryLayout
