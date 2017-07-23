import React from 'react'

import { Heading, Text, Image } from 'spectacle'

const Fractal = ({ image }) =>
  <div>
    <Heading fit>Compositon is Fractal</Heading>
    <Image src={image} />
    <Text>operation -> service -> use case -> app</Text>
  </div>

export default Fractal
