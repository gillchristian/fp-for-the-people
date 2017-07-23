import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

const wills = [
  'My journey into FP',
  'Some core concepts about FP',
  'Insights on why and how to do FP in JS',
]

const listItems = list =>
  <List textColor="tertiary">
    {list.map((item, key) =>
      <ListItem key={key}>
        {item}
      </ListItem>
    )}
  </List>

export default function WillTalkAbout() {
  return (
    <div>
      <Heading>
        What this talk <b>is</b>
      </Heading>
      {listItems(wills)}
    </div>
  )
}
