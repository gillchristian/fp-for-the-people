import React from 'react'

import { Text } from 'spectacle'

const PureExample = () =>
  <div>
    <Text size={2} textColor="tertiary">
      React
    </Text>
    <Text size={2} textColor="tertiary">
      {'f(data) -> view'}
    </Text>
    <br />
    <Text size={2} textColor="tertiary">
      Redux
    </Text>
    <Text size={2} textColor="tertiary">
      {'f(state, action) -> state'}
    </Text>
  </div>

export default PureExample
