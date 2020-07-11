import { render } from '@redwoodjs/testing'

import GithubcallbackPage from './GithubcallbackPage'

describe('GithubcallbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GithubcallbackPage />)
    }).not.toThrow()
  })
})
