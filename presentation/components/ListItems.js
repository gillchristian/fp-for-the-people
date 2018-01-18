import React from 'react'

import { List, ListItem } from 'spectacle'

const ListItems = ({ items }) => (
  <List textColor="tertiary">
    {items.map((item, key) => <ListItem key={key}>{item}</ListItem>)}
  </List>
)

export default ListItems
