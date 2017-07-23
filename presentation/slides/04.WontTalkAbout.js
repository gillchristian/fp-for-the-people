import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

const wonts = [
  'An expert talking',
  'Category theory',
  'Monads',
  'Monoids',
  'Endomorphisms',
  'Black magic',
]

const listItems = list =>
  <List textColor="tertiary">
    {list.map((item, key) =>
      <ListItem key={key}>
        {item}
      </ListItem>
    )}
  </List>

export default function WontTalkAbout() {
  return (
    <div>
      <Heading>
        What this talk is <b>not</b>
      </Heading>
      {listItems(wonts)}
    </div>
  )
}
