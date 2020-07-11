import { useAuth } from '@redwoodjs/auth'
import { navigate, routes, useLocation } from '@redwoodjs/router'

export const github = 'githubAccessToken'

const accessTable = {
  github,
}

const goToAuthorization = (currentPath) =>
  currentPath !== routes.authorization() && navigate(routes.authorization())

/**
 * Navigate away from current page if the provided access type does not exist on the current user
 *
 * @param {string} accessType
 */
export const useRequiresGit = (accessType) => {
  const { pathname } = useLocation()
  const { currentUser } = useAuth()

  if (!currentUser) return goToAuthorization(pathname)

  const currentAccess = currentUser?.[accessTable?.[accessType]]
  if (!currentAccess || !currentAccess?.length)
    return goToAuthorization(pathname)

  return true
}
