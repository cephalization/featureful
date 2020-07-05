import { render } from '@redwoodjs/testing'

import SidebarLink from './SidebarLink'

describe('SidebarLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarLink />)
    }).not.toThrow()
  })
})
