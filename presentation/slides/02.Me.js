import React from 'react'

import { Heading, Link, Text } from 'spectacle'

const Component = () =>
  <div>
    <Heading size={4} textColor="tertiary">
      Christian Gill
    </Heading>
    <Text margin="50px 0px 0px">
      <Link
        href="https://gillchristian.xyz"
        target="_blank"
        textColor="quaternary"
      >
        React JS
      </Link>
      {' @ '}
      <Link
        href="https://housinganywhere.com/"
        target="_blank"
        textColor="quaternary"
      >
        Housing Anywhere
      </Link>
    </Text>
  </div>

export default Component
