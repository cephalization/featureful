import PropTypes from 'prop-types'
import SidebarLink from 'src/components/SidebarLink'
import Transition from 'src/components/Transition'
import { useState } from 'react'

const Sidebar = ({ items, open, toggleSidebar = () => {} }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(open)
  const sidebarLinks = Array.isArray(items)
    ? items.map((item) => <SidebarLink key={item.title} {...item} />)
    : null

  const Title = () => (
    <h2 className="ext-2xl font-semibold text-white">Features</h2>
  )

  return (
    <>
      {/* <!-- Hidden menu sidenav for mobile --> */}
      <div className={`${mobileNavVisible ? '' : 'hidden '}md:hidden`}>
        <div className="fixed inset-0 flex z-40">
          <Transition
            show={open}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onEnter={() => setMobileNavVisible(true)}
            onExited={() => setMobileNavVisible(false)}
          >
            <div className="fixed inset-0">
              <div
                onClick={toggleSidebar}
                className="absolute inset-0 bg-gray-600 opacity-75"
              ></div>
            </div>
          </Transition>
          <Transition
            show={open}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-800">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                  onClick={toggleSidebar}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                <Title />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">{sidebarLinks}</nav>
              </div>
            </div>
          </Transition>
          <div className="flex-shrink-0 w-14">
            {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <Title />
          </div>
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* <!-- Sidebar component --> */}
            <nav className="flex-1 px-2 py-4 bg-gray-800">{sidebarLinks}</nav>
          </div>
        </div>
      </div>
    </>
  )
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(SidebarLink.propTypes),
  open: PropTypes.bool,
  toggleSidebar: PropTypes.func,
}

export default Sidebar
