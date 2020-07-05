import { render } from '@redwoodjs/testing'

import UserAvatar from './UserAvatar'

describe('UserAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserAvatar />)
    }).not.toThrow()
  })
})
