import { render } from '@redwoodjs/testing'

import Transition from './Transition'

describe('Transition', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Transition />)
    }).not.toThrow()
  })
})
