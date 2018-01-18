import React from 'react'

import { Heading, Text } from 'spectacle'

const Composition = () => (
  <div>
    <Heading>Composition</Heading>
    <Text textSize="3rem" margin="50" textColor="primary">
      <b>{'(f ∘ g)(x) = f(g(x))'}</b>
    </Text>
  </div>
)

export default Composition
