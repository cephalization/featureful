import { useState } from 'react'
import Transition from 'src/components/Transition'
import { useAuth } from '@redwoodjs/auth'

const UserAvatar = () => {
  const { currentUser, logOut } = useAuth()
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

  const profilePictureURL = currentUser.profileURL

  const toggleProfileDropdown = () => setProfileDropdownOpen((o) => !o)

  return (
    <div className="ml-3 relative">
      <div>
        <button
          className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
          id="user-menu"
          aria-label="User menu"
          aria-haspopup="true"
          onClick={toggleProfileDropdown}
        >
          <img
            className="h-8 w-8 rounded-full"
            src={profilePictureURL}
            alt=""
          />
        </button>
      </div>

      {/* Profile Dropdown */}
      <Transition
        show={profileDropdownOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div
            className="py-1 rounded-md bg-white shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
              role="menuitem"
            >
              Your Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
              role="menuitem"
            >
              Settings
            </a>
            <div
              onClick={logOut}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
              role="menuitem"
            >
              Sign out
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default UserAvatar
