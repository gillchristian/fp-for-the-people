import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

import ListItems from '../components/ListItems'

const wonts = [
  'An expert talking',
  'Category theory',
  'Monads',
  'Monoids',
  'Endomorphisms',
  'Black magic',
]

const WontTalkAbout = () => (
  <div>
    <Heading fit size={2} lineHeight={1}>
      What this talk IS NOT
    </Heading>
    <ListItems items={wonts} />
  </div>
)

export default WontTalkAbout
