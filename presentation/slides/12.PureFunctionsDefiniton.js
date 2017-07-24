import React from 'react'

import { BlockQuote, Quote, Cite } from 'spectacle'

const Component = () =>
  <BlockQuote>
    <Quote textSize={40} textColor="secondary">
      A pure function is a function that, given the same input, will always
      return the same output and does not have any observable side effect.
    </Quote>
    <Cite>Brian Lonsdorf</Cite>
    <Cite>Mostly adequate guide to FP</Cite>
  </BlockQuote>

export default Component
