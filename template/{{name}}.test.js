import React from 'react'
import { shallow } from 'enzyme'
import {{name}} from '.'

const defaultProps = {}

it('renders without crashing', () => {
  shallow(<{{name}} {...defaultProps} />)
})
