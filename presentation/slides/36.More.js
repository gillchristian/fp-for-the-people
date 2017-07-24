import React from 'react'

import { Text } from 'spectacle'

import ListItems from '../components/ListItems'
import Link from '../components/Link'

const more = [
  <Link href="https://github.com/xgrommx/awesome-functional-programming">
    awesome-functional-programming
  </Link>,
  <Link href="https://github.com/stoeffel/awesome-fp-js">awesome-fp-js</Link>,
  <span>
    <Link href="http://fsharpforfunandprofit.com/fppatterns/">
      FP Design Patterns
    </Link>
    {' (F#)'}
  </span>,
  <Link href="https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell">
    Functional core, Imperative shell
  </Link>,
  <span>
    <Link href="https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf">
      Why FP Matters
    </Link>
    {' (paper)'}
  </span>,
  <Link href="http://elm-lang.org/">Elm</Link>,
  <Link href="https://reasonml.github.io/">Reason</Link>,
]

const More = () =>
  <div>
    <Text>More</Text>
    <ListItems items={more} />
  </div>

export default More
