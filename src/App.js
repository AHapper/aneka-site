import Navbar from './Navbar'
import Home from './Home'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import NotFound from './NotFound';
import AboutMe from './AboutMe';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff'
      },
      secondary: {
        main: '#181E27'
      }
    },
    typography: {
      fontFamily: 'Noto Sans KR',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700 
    },
    overrides: {
      MuiButton: {
        outlinedPrimary: {
          color: 'white',
        },
      },
    }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            {/* switch component makes sure only one route is displayed at a time */}
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/about_me'>
                <AboutMe />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
