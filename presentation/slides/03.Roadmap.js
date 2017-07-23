import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

const roadmap = [
  'Intro',
  'Functional Programming',
  'Why FP in JS ?',
  'Libraries',
  'Resources',
]

const listItems = list =>
  <List textColor="tertiary">
    {list.map((item, key) =>
      <ListItem key={key}>
        {item}
      </ListItem>
    )}
  </List>

export default function Roadmap() {
  return (
    <div>
      <Heading>Roadmap</Heading>
      {listItems(roadmap)}
    </div>
  )
}
