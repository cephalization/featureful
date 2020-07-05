import { render } from '@redwoodjs/testing'

import PrimaryLayout from './PrimaryLayout'

describe('PrimaryLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrimaryLayout />)
    }).not.toThrow()
  })
})
