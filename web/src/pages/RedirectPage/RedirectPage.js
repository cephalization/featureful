import { Redirect, routes } from '@redwoodjs/router'

const RedirectPage = () => {
  // TODO: if authenticated, route to dashboard or initial route

  // User is unauthenticated, push to login page
  return <Redirect to={routes.login()} />
}

export default RedirectPage
