// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={RedirectPage} name="redirect" />
      <Private unauthenticated="login">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route
          path="/authorization"
          page={AuthorizationPage}
          name="authorization"
        />
        <Route
          path="/callback/github"
          page={GithubcallbackPage}
          name="githubcallback"
        />
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
