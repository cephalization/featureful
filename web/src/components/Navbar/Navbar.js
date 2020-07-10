import PropTypes from 'prop-types'
import UserAvatar from 'src/components/UserAvatar'

const Navbar = ({
  toggleSidebar = () => {},
  hideSearch = false,
  hideSidebar = false,
}) => {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      {!hideSidebar && (
        <button
          onClick={toggleSidebar}
          className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      )}
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
            {!hideSearch && (
              <>
                <label htmlFor="search_field" className="sr-only">
                  Filter features
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <UserAvatar />
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
  hideSearch: PropTypes.bool,
  hideSidebar: PropTypes.bool,
}

export default Navbar
