import React from 'react'

import { Heading, Text } from 'spectacle'

import Link from '../components/Link'

const Component = () =>
  <div>
    <Heading size={4} textColor="tertiary">
      Christian Gill
    </Heading>
    <Text margin="50px 0px 0px">
      <Link href="https://gillchristian.xyz/about-me">React JS</Link>
      {' @ '}
      <Link href="https://housinganywhere.com/">Housing Anywhere</Link>
    </Text>
  </div>

export default Component
