import React from 'react'

import { Heading, List, ListItem } from 'spectacle'

import ListItems from '../helpers/ListItems'

const roadmap = [
  'Intro',
  'Functional Programming',
  'Why FP in JS ?',
  'Libraries',
  'Resources',
]

export default function Roadmap() {
  return (
    <div>
      <Heading>Roadmap</Heading>
      <ListItems items={roadmap} />
    </div>
  )
}
