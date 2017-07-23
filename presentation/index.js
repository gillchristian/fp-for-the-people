// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Slides
import Intro from './slides/01.Intro'
import Me from './slides/02.Me'
import Roadmap from './slides/03.Roadmap'
import WontTalkAbout from './slides/04.WontTalkAbout'
import WillTalkAbout from './slides/05.WillTalkAbout'
import IKnowFP from './slides/06.IKnowFP'
import FP from './slides/07.FP'
import Definition from './slides/08.Definition'
import Functions from './slides/09.Functions'
import PureFunctions from './slides/11.PureFunctions'
import PureFunctionsDefinition from './slides/12.PureFunctionsDefiniton'
import EzTestEsLife from './slides/14.EzTestEzLife'
import PureExample from './slides/16.PureExample'
import Composition from './slides/17.Composition'
import Fractal from './slides/18.Fractal'
import CompositionVsInheritance from './slides/19.CompositionVsInheritance'
import GorillaBanana from './slides/20.GorillaBanana'
// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  iKnowFP: require('../assets/i-know-fp.png'),
  fractal: require('../assets/fractal.png'),
  gorilla: require('../assets/gorilla-banana.jpg'),
}

preloader(images)

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#434343',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'monospace',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Intro />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Me />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Roadmap />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <WontTalkAbout />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <WillTalkAbout />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <IKnowFP image={images.iKnowFP} />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <FP />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Definition />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Functions />
        </Slide>
        <CodeSlide
          transition={['zoom']}
          lang="js"
          code={require('raw-loader!../assets/code/functions.txt')}
          ranges={[
            { loc: [0, 11] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide transition={['zoom']} bgColor="primary">
          <PureFunctions />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <PureFunctionsDefinition />
        </Slide>
        <CodeSlide
          transition={['zoom']}
          lang="js"
          code={require('raw-loader!../assets/code/pure.txt')}
          ranges={[
            { loc: [0, 16] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide transition={['zoom']} bgColor="primary">
          <EzTestEsLife />
        </Slide>
        <CodeSlide
          transition={['zoom']}
          lang="js"
          code={require('raw-loader!../assets/code/tests.txt')}
          ranges={[
            { loc: [0, 11] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide transition={['zoom']} bgColor="primary">
          <PureExample />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Composition />
        </Slide>
        <CodeSlide
          transition={['zoom']}
          lang="js"
          code={require('raw-loader!../assets/code/composition.txt')}
          ranges={[
            { loc: [0, 11] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide transition={['zoom']} bgColor="primary">
          <Fractal image={images.fractal} />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <CompositionVsInheritance />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <GorillaBanana image={images.gorilla} />
        </Slide>
      </Deck>
    )
  }
}
