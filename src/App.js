import Navbar from './Navbar'
import Home from './Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import NotFound from './NotFound';
import AboutMe from './AboutMe';

function App() {

  return (
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
  );
}

export default App;
