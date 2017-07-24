import React from 'react'

import { BlockQuote, Quote, Cite } from 'spectacle'

const Component = () =>
  <BlockQuote>
    <Quote textSize={40} textColor="primary">
      A monad in X is just a monoid in the category of endofunctors of X, with
      product × replaced by composition of endofunctors and unit set by the
      identity endofunctor.
    </Quote>
    <Cite>Saunders Mac Lane.</Cite>
    <Cite>Categories for the Working Mathematician</Cite>
  </BlockQuote>

export default Component
