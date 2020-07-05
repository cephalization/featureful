import PropTypes from 'prop-types'

const SidebarLink = ({ title, Icon, to }) => {
  return (
    <a
      href={to}
      className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
    >
      {Icon && <Icon size={6} />}
      {title}
    </a>
  )
}

SidebarLink.propTypes = {
  // Title to display
  title: PropTypes.string.isRequired,

  // SVG Icon to display
  Icon: PropTypes.elementType,

  // Location to route to on click
  to: PropTypes.string,
}

export default SidebarLink
