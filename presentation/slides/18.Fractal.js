import React from 'react'

import { Heading, Text, Image } from 'spectacle'

import Link from '../components/Link'

const Fractal = ({ image }) =>
  <div>
    <Link href="http://fsharpforfunandprofit.com/fppatterns/">
      <Heading fit>Compositon is Fractal</Heading>
    </Link>
    <Image src={image} />
    <Text fit>operation -> service -> use case -> app</Text>
  </div>

export default Fractal
