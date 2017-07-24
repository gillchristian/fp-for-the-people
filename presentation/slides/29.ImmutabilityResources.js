import React from 'react'

import ListItems from '../components/ListItems'
import Link from '../components/Link'

const pros = [
  <Link href="https://facebook.github.io/immutable-js/">Immutable.js</Link>,
  <Link href="http://swannodette.github.io/mori/">mori</Link>,
  <Link href="https://github.com/rtfeldman/seamless-immutable">
    seamless-immutable
  </Link>,
]

const ImmutabilityResources = () => <ListItems items={pros} />

export default ImmutabilityResources
