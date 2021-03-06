import React from 'react'

import { Heading } from 'spectacle'

import ListItems from '../components/ListItems'

const roadmap = [
  'Intro',
  'Functional Programming',
  'Why FP in JS ?',
  'Libraries',
  'Resources',
]

const Roadmap = () => (
  <div>
    <Heading size={2} lineHeight={1}>
      Roadmap
    </Heading>
    <ListItems items={roadmap} />
  </div>
)

export default Roadmap
