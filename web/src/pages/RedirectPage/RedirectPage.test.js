import { render } from '@redwoodjs/testing'

import RedirectPage from './RedirectPage'

describe('RedirectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedirectPage />)
    }).not.toThrow()
  })
})
