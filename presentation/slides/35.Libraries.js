import React from 'react'

import { Text } from 'spectacle'

import ListItems from '../components/ListItems'
import Link from '../components/Link'

const libs = [
  <span>
    <Link href="https://github.com/fantasyland/fantasy-land">Fantasy land</Link>
    {' (spec)'}
  </span>,
  <span>
    <Link href="http://ramdajs.com/">Ramda</Link>
    {' & '}
    <Link href="https://github.com/ramda/ramda-fantasy">ramda-fantasy</Link>
  </span>,
  <Link href="http://folktalejs.org/">Folktale</Link>,
  <Link href="https://github.com/DrBoolean/immutable-ext">Immutable-ext</Link>,
  <Link href="https://sanctuary.js.org/">Sanctuary</Link>,
  <Link href="http://reactivex.io/rxjs/">RxJS</Link>,
  <Link href="https://github.com/fluture-js/Fluture">Fluture</Link>,
]

const Libraries = () =>
  <div>
    <Text>Libraries</Text>
    <ListItems items={libs} />
  </div>

export default Libraries
