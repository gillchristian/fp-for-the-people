import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

import ListItems from '../components/ListItems'

const wills = [
  'My journey into FP',
  'Some core FP concepts',
  'Insights on why and how to do FP in JS',
]

const WillTalkAbout = () =>
  <div>
    <Heading fit size={2} lineHeight={1}>
      What this talk IS
    </Heading>
    <ListItems items={wills} />
  </div>

export default WillTalkAbout
