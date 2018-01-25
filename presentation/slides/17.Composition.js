import React from 'react'

import { Heading, Text } from 'spectacle'

const Composition = () => (
  <div>
    <Heading>Composition</Heading>
    <Heading size={4} margin="50" textColor="primary">
      {'(f ∘ g)(x) = f(g(x))'}
    </Heading>
  </div>
)

export default Composition
