import React from 'react'

import { Text } from 'spectacle'

const PureExample = () => (
  <div>
    <Text size={2}>React</Text>
    <Text size={2}>{'f(data) -> view'}</Text>
    <br />
    <Text size={2}>Redux</Text>
    <Text size={2}>{'f(state, action) -> state'}</Text>
  </div>
)

export default PureExample
