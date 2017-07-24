import React from 'react'

import ListItems from '../helpers/ListItems'

const pros = [
  <a href="https://facebook.github.io/immutable-js/" target="_blank">
    Immutable.js
  </a>,
  <a href="http://swannodette.github.io/mori/" target="_blank">
    mori
  </a>,
  <a href="https://github.com/rtfeldman/seamless-immutable" target="_blank">
    seamless-immutable
  </a>,
]

const ImmutabilityResources = () => <ListItems items={pros} />

export default ImmutabilityResources
