import React from 'react'

import { Heading } from 'spectacle'

import ListItems from '../helpers/ListItems'

const libs = [
  <a
    href="https://github.com/xgrommx/awesome-functional-programming"
    target="_blank"
  >
    awesome-functional-programming
  </a>,
  <a href="https://github.com/stoeffel/awesome-fp-js" target="_blank">
    awesome-fp-js
  </a>,
  <a
    href="https://github.com/timoxley/functional-javascript-workshop"
    target="_blank"
  >
    functional-javascript-workshop
  </a>,
  <span>
    <a href="http://fsharpforfunandprofit.com/fppatterns/" target="_blank">
      FP Design Patterns
    </a>
    {' (F#)'}
  </span>,
  <span>
    <a href="https://twitter.com/drboolean" target="_blank">
      @drboolean
    </a>
    {': '}
    <a
      href="https://github.com/MostlyAdequate/mostly-adequate-guide"
      target="_blank"
    >
      Book
    </a>
    {', '}
    <a
      href="https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript"
      target="_blank"
    >
      Videos
    </a>
  </span>,
  <a
    href="https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell"
    target="_blank"
  >
    Functional core, Imperative shell
  </a>,
  <span>
    <a
      href="https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf"
      target="_blank"
    >
      Why FP Matters
    </a>
    {' (paper)'}
  </span>,
]

const More = () =>
  <div>
    <ListItems items={libs} />
  </div>

export default More
