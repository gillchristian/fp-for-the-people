import React from 'react'

import { Heading } from 'spectacle'

import ListItems from '../helpers/ListItems'

const libs = [
  <span>
    <a href="https://github.com/fantasyland/fantasy-land" target="_blank">
      Fantasy land
    </a>
    {' (spec)'}
  </span>,
  <span>
    <a href="http://ramdajs.com/" target="_blank">
      Ramda
    </a>
    {' & '}
    <a href="https://github.com/ramda/ramda-fantasy" target="_blank">
      ramda-fantasy
    </a>
  </span>,
  <a href="http://folktalejs.org/" target="_blank">
    Folktale
  </a>,
  <a href="https://facebook.github.io/immutable-js/" target="_blank">
    Immutable
  </a>,
  <a href="https://github.com/DrBoolean/immutable-ext" target="_blank">
    Immutable-ext
  </a>,
  <a href="https://sanctuary.js.org/" target="_blank">
    Sanctuary
  </a>,
  <a href="http://reactivex.io/rxjs/" target="_blank">
    RxJS
  </a>,
]

export default function Libraries() {
  return (
    <div>
      <Heading>Libraries</Heading>
      <ListItems items={libs} />
    </div>
  )
}
