import { render } from '@redwoodjs/testing'

import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Navbar />)
    }).not.toThrow()
  })
})
