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
import FP from './slides/06.FP'
import IKnowFP from './slides/07.IKnowFP'
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
import Curry from './slides/23.Curry'
import Declarative from './slides/25.Declarative'
import Immutability from './slides/27.Immutability'
import ImmutabilityPros from './slides/28.ImmutabilityPros'
import ImmutabilityResources from './slides/29.ImmutabilityResources'
import WhyTho from './slides/31.WhyTho'
import BecauseJS from './slides/32.BecauseJS'
import BecauseWeCan from './slides/33.BecauseWeCan'
import Resources from './slides/34.Resources'
import Libraries from './slides/35.Libraries'
import More from './slides/36.More'
import Questions from './slides/37.Questions'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  ohComeOn: require('../assets/oh-come-on.gif'),
  iKnowFP: require('../assets/i-know-fp.png'),
  fractal: require('../assets/fractal.png'),
  gorilla: require('../assets/gorilla-banana.jpg'),
  curry: require('../assets/curry.jpg'),
  thanks: require('../assets/thanks.gif'),
  questions: require('../assets/questions.gif'),
  minig: require('../assets/mining.jpg'),
  rocks: require('../assets/rocks.jpg'),
  pure: require('../assets/pure.jpg'),
  city: require('../assets/city.jpg'),
  lego: require('../assets/lego.jpg'),
  library: require('../assets/library.jpg'),
}

preloader(images)

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#434343',
    tertiary: '#4286f4',
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
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Intro />
        </Slide>
        <Slide bgColor="primary">
          <Me />
        </Slide>
        <Slide bgColor="primary">
          <Roadmap />
        </Slide>
        <Slide bgColor="primary">
          <WontTalkAbout />
        </Slide>
        <Slide bgColor="primary">
          <WillTalkAbout />
        </Slide>
        <Slide bgColor="primary">
          <FP />
        </Slide>
        <Slide bgColor="primary">
          <IKnowFP image={images.iKnowFP} />
        </Slide>
        <Slide bgColor="primary" bgImage={images.ohComeOn}>
          <Definition />
        </Slide>
        <Slide bgColor="primary">
          <Functions />
        </Slide>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/functions.txt')}
          ranges={[
            { loc: [0, 11] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide bgImage={images.pure} bgDarken={0.5}>
          <PureFunctions />
        </Slide>
        <Slide bgColor="primary">
          <PureFunctionsDefinition />
        </Slide>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/pure.txt')}
          ranges={[
            { loc: [0, 16] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide bgColor="primary">
          <EzTestEsLife />
        </Slide>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/tests.txt')}
          ranges={[
            { loc: [0, 11] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide bgColor="primary">
          <PureExample />
        </Slide>
        <Slide bgImage={images.lego} bgDarken={0.5}>
          <Composition />
        </Slide>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/composition.txt')}
          ranges={[
            { loc: [0, 11] },
            { loc: [0, 2], note: 'Walking through some code' },
          ]}
        />
        <Slide bgColor="primary">
          <Fractal image={images.fractal} />
        </Slide>
        <Slide bgColor="primary">
          <CompositionVsInheritance />
        </Slide>
        <Slide bgColor="primary">
          <GorillaBanana image={images.gorilla} />
        </Slide>
        {/* TODO: add inheritance example */}
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/composition-ftw.txt')}
          ranges={[
            { loc: [0, 1], title: 'Composition' },
            { loc: [2, 8] },
            { loc: [9, 16] },
            { loc: [17, 22] },
            { loc: [23, 28] },
            { loc: [29, 44] },
            { loc: [45, 46] },
            { loc: [47, 48] },
            { loc: [49, 51] },
            { loc: [52, 54] },
            {
              loc: [0, 1],
              note: (
                <span>
                  Run example on{' '}
                  <a href="https://goo.gl/K8XXhV" target="_blank">
                    JS Bin
                  </a>
                  {'. '}
                  <a href="https://youtu.be/wfMtDGfHWpA" target="_blank">
                    Source
                  </a>.
                </span>
              ),
            },
          ]}
        />
        <Slide bgImage={images.curry} bgDarken={0.75}>
          <Curry />
        </Slide>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/curry.txt')}
          ranges={[
            { loc: [0, 1], title: 'Curry' },
            { loc: [0, 1], note: 'Walking through some code' },
          ]}
        />
        <Slide bgColor="primary">
          <Declarative />
        </Slide>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/declarative.txt')}
          ranges={[
            { loc: [0, 1], title: 'Declarative' },
            { loc: [0, 1], note: 'Walking through some code' },
          ]}
        />
        <Slide bgImage={images.rocks}>
          <Immutability />
        </Slide>
        <Slide bgColor="primary">
          <ImmutabilityPros />
        </Slide>
        <Slide bgColor="primary">
          <ImmutabilityResources />
        </Slide>
        {/* TODO: add JS Bin http://jsbin.com/safiwa/edit?js,console */}
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/immutability.txt')}
          ranges={[
            { loc: [0, 1], title: 'Immutability' },
            { loc: [0, 1], note: 'Walking through some code' },
          ]}
        />
        <Slide bgColor="primary">
          <WhyTho />
        </Slide>
        <Slide bgColor="#f1e05a">
          <BecauseJS />
        </Slide>
        <Slide bgImage={images.city}>
          <BecauseWeCan />
        </Slide>
        <Slide bgImage={images.minig}>
          <Resources />
        </Slide>
        <Slide bgImage={images.library} bgDarken={0.75}>
          <Libraries />
        </Slide>
        <Slide bgColor="primary">
          <More />
        </Slide>
        <Slide bgColor="primary">
          <Questions image={images.questions} />
        </Slide>
        <Slide bgColor="primary" bgImage={images.thanks} />
      </Deck>
    )
  }
}
