import { render } from '@redwoodjs/testing'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sidebar />)
    }).not.toThrow()
  })
})
