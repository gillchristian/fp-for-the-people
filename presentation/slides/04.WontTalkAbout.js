import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

import ListItems from '../helpers/ListItems'

const wonts = [
  'An expert talking',
  'Category theory',
  'Monads',
  'Monoids',
  'Endomorphisms',
  'Black magic',
]

export default function WontTalkAbout() {
  return (
    <div>
      <Heading>
        What this talk is <b>not</b>
      </Heading>
      <ListItems items={wonts} />
    </div>
  )
}
