import React from 'react'

import { Text } from 'spectacle'

import ListItems from '../components/ListItems'
import Link from '../components/Link'

const learning = [
  <span>
    <Link href="https://twitter.com/drboolean">@drboolean</Link>
    {': '}
    <Link href="https://github.com/MostlyAdequate/mostly-adequate-guide">
      Book
    </Link>
    {', '}
    <Link href="https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript">
      Videos
    </Link>
  </span>,
  <Link href="http://www.tomharding.me/fantasy-land/">
    Fantas, Eel, and Specification
  </Link>,
  <Link href="https://github.com/timoxley/functional-javascript-workshop">
    functional-javascript-workshop
  </Link>,
  <Link href="http://randycoulman.com/blog/categories/thinking-in-ramda/">
    Thinking in Ramda
  </Link>,
]

const More = () => (
  <div>
    <Text>Learning</Text>
    <ListItems items={learning} />
  </div>
)

export default More
