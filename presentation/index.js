// Import React
import React from 'react'
import { ThemeProvider } from 'styled-components'

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

// Require CSS
import 'normalize.css'

// Import components
import Link from './components/Link'

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
import HoFs from './slides/10.HoFs'
import PureFunctions from './slides/11.PureFunctions'
import PureFunctionsDefinition from './slides/12.PureFunctionsDefiniton'
import EzTestEsLife from './slides/14.EzTestEzLife'
import PureExample from './slides/16.PureExample'
import Composition from './slides/17.Composition'
import Fractal from './slides/18.Fractal'
import CompositionVsInheritance from './slides/19.CompositionVsInheritance'
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
import Learning from './slides/36.Learning'
import More from './slides/36.More'
import Questions from './slides/37.Questions'
import Remember from './slides/38.Remember'

const images = {
  ohComeOn: require('../assets/oh-come-on.gif').replace('/', ''),
  iKnowFP: require('../assets/i-know-fp.png').replace('/', ''),
  fractal: require('../assets/fractal.png').replace('/', ''),
  gorilla: require('../assets/gorilla-banana.jpg').replace('/', ''),
  curry: require('../assets/curry.jpg').replace('/', ''),
  thanks: require('../assets/thanks.gif').replace('/', ''),
  questions: require('../assets/questions.gif').replace('/', ''),
  rocks: require('../assets/rocks.jpg').replace('/', ''),
  pure: require('../assets/pure.jpg').replace('/', ''),
  city: require('../assets/city.jpg').replace('/', ''),
  lego: require('../assets/lego.jpg').replace('/', ''),
  library: require('../assets/library.jpg').replace('/', ''),
  onlyU: require('../assets/only-you.jpg').replace('/', ''),
}

preloader(images)

const colors = {
  primary: 'white',
  secondary: '#434343',
  tertiary: '#4286f4',
  quarternary: '#7f7b7b',
}

const theme = createTheme(colors, {
  primary: 'monospace',
  secondary: 'Helvetica',
})

export default class Presentation extends React.Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
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
          <Slide bgColor="primary">
            <HoFs />
          </Slide>
          <CodeSlide
            lang="js"
            code={require('raw-loader!../assets/code/functions.txt')}
            ranges={[
              { loc: [0, 1], title: 'Higher Order Functions' },
              { loc: [0, 3] },
              { loc: [4, 6], note: 'Pass functions as parameters' },
              { loc: [7, 8], note: 'Return functions from other functions' },
              { loc: [9, 10] },
              { loc: [11, 13] },
              { loc: [7, 13] },
              { loc: [14, 24] },
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
              { loc: [0, 1], title: 'Pure functions' },
              { loc: [0, 4] },
              { loc: [5, 6] },
              { loc: [5, 9] },
              { loc: [10, 11] },
              { loc: [10, 14] },
              { loc: [15, 16] },
              { loc: [17, 22] },
              { loc: [23, 30] },
              { loc: [31, 32] },
              { loc: [33, 36] },
              { loc: [37, 40] },
            ]}
          />
          <Slide bgColor="primary">
            <EzTestEsLife />
          </Slide>
          <CodeSlide
            lang="js"
            code={require('raw-loader!../assets/code/tests.txt')}
            ranges={[
              { loc: [0, 0], title: 'DI & Tests' },
              { loc: [0, 1], note: 'Impure' },
              { loc: [2, 3], note: 'Pure' },
              { loc: [4, 5], note: 'Dev/Prod' },
              { loc: [6, 16], note: 'Testing' },
              { loc: [17, 19] },
              {
                loc: [19, 19],
                note: (
                  <span>
                    Run example on{' '}
                    <Link href="http://jsbin.com/cipujur/1/edit?js,console">
                      JS Bin
                    </Link>.
                  </span>
                ),
              },
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
              { loc: [0, 0], title: 'Composition' },
              { loc: [0, 1], note: 'Compose' },
              { loc: [2, 3] },
              { loc: [4, 5] },
              { loc: [2, 5] },
              { loc: [6, 7] },
              { loc: [8, 15] },
              { loc: [16, 19], note: 'Order matters' },
              { loc: [20, 23], note: 'Pipe' },
              { loc: [24, 25] },
              {
                loc: [25, 25],
                note: (
                  <span>
                    Run example on{' '}
                    <Link href="http://jsbin.com/mepaji/1/edit?js,console">
                      JS Bin
                    </Link>.
                  </span>
                ),
              },
            ]}
          />
          <Slide bgColor="primary">
            <Fractal image={images.fractal} />
          </Slide>
          <Slide bgImage={images.gorilla} bgDarken={0.5}>
            <CompositionVsInheritance />
          </Slide>
          <CodeSlide
            lang="js"
            code={require('raw-loader!../assets/code/inheritance.txt')}
            ranges={[
              { loc: [0, 0], title: 'Inheritance' },
              { loc: [2, 4] },
              { loc: [7, 12] },
              { loc: [15, 22] },
              { loc: [25, 33] },
              { loc: [36, 43] },
              { loc: [44, 52] },
              { loc: [55, 63] },
              { loc: [64, 72] },
              { loc: [76, 78] },
              { loc: [79, 89] },
              { loc: [90, 97] },
              { loc: [100, 111] },
              { loc: [112, 120] },
            ]}
          />
          <CodeSlide
            lang="js"
            code={require('raw-loader!../assets/code/composition-ftw.txt')}
            ranges={[
              { loc: [0, 1], title: 'Composition' },
              { loc: [2, 8] },
              { loc: [9, 12] },
              { loc: [13, 18] },
              { loc: [19, 24] },
              { loc: [25, 40] },
              { loc: [41, 42] },
              { loc: [43, 44] },
              { loc: [45, 47] },
              { loc: [48, 50] },
              {
                loc: [50, 50],
                note: (
                  <span>
                    Run example on{' '}
                    <Link href="https://goo.gl/K8XXhV">JS Bin</Link>
                    {'. '}
                    <Link href="https://youtu.be/wfMtDGfHWpA">Reference</Link>.
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
              { loc: [0, 0], title: 'Curry' },
              { loc: [0, 2] },
              { loc: [3, 9] },
              { loc: [10, 11] },
              { loc: [12, 14] },
              { loc: [15, 17] },
              { loc: [18, 20] },
              { loc: [21, 26] },
              { loc: [27, 28] },
              { loc: [29, 33] },
              { loc: [34, 38] },
              { loc: [39, 40] },
              { loc: [41, 47] },
              {
                loc: [47, 47],
                note: (
                  <span>
                    Run example on{' '}
                    <Link href="http://jsbin.com/jesolih/1/edit?js,console">
                      JS Bin
                    </Link>.
                  </span>
                ),
              },
            ]}
          />
          <Slide bgColor="primary">
            <Declarative />
          </Slide>
          <CodeSlide
            lang="js"
            code={require('raw-loader!../assets/code/declarative.txt')}
            ranges={[
              { loc: [0, 0], title: 'Declarative' },
              { loc: [0, 11] },
              { loc: [11, 27] },
              { loc: [28, 33] },
              { loc: [34, 47] },
              { loc: [48, 52] },
              {
                loc: [52, 52],
                note: (
                  <span>
                    Run example on{' '}
                    <Link href="http://jsbin.com/xafetap/1/edit?js,console">
                      JS Bin
                    </Link>.
                  </span>
                ),
              },
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
          <CodeSlide
            lang="js"
            code={require('raw-loader!../assets/code/immutability.txt')}
            ranges={[
              { loc: [0, 0], title: 'Immutability' },
              { loc: [0, 1] },
              { loc: [2, 3] },
              { loc: [4, 5] },
              { loc: [6, 8] },
              { loc: [9, 10] },
              { loc: [13, 14] },
              { loc: [15, 16] },
              { loc: [17, 18] },
              { loc: [19, 21] },
              { loc: [22, 23] },
              { loc: [26, 27] },
              { loc: [28, 29] },
              { loc: [30, 31] },
              { loc: [31, 34] },
              { loc: [35, 36] },
              {
                loc: [36, 36],
                note: (
                  <span>
                    Run example on{' '}
                    <Link href="http://jsbin.com/safiwa/2/edit?js,console">
                      JS Bin
                    </Link>.
                  </span>
                ),
              },
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
          <Slide bgImage={images.library} bgDarken={0.75}>
            <Resources />
          </Slide>
          <Slide bgColor="primary">
            <Libraries />
          </Slide>
          <Slide bgColor="primary">
            <Learning />
          </Slide>
          <Slide bgColor="primary">
            <More />
          </Slide>
          <Slide bgColor="primary">
            <Questions image={images.questions} />
          </Slide>
          <Slide bgColor="primary">
            <Remember image={images.onlyU} />
          </Slide>
          <Slide bgColor="primary" bgImage={images.thanks} />
        </Deck>
      </ThemeProvider>
    )
  }
}
