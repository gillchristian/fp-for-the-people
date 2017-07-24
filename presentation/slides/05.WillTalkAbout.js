import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

import ListItems from '../helpers/ListItems'

const wills = [
  'My journey into FP',
  'Some core concepts about FP',
  'Insights on why and how to do FP in JS',
]

export default function WillTalkAbout() {
  return (
    <div>
      <Heading>
        What this talk <b>is</b>
      </Heading>
      <ListItems items={wills} />
    </div>
  )
}