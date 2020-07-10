import { render } from '@redwoodjs/testing'

import AuthorizationPage from './AuthorizationPage'

describe('AuthorizationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthorizationPage />)
    }).not.toThrow()
  })
})
