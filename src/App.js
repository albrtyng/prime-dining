import React from 'react';
import { Switch, Redirect, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import BrowsePage from './pages/BrowsePage';
import ItalianPage from './pages/ItalianPage';
import LandingPage from './pages/LandingPage';

import './styles/App.scss';
import TitleBar from './components/TitleBar';
import BucaPage from './pages/BucaPage';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence className='app' exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Redirect exact from='/' to='/landing' />
        <Route exact path='/landing' component={LandingPage} />
        <Route path='/browse'>
          <TitleBar />
          <Switch>
            <Route exact path='/browse' component={BrowsePage}/>
            <Route exact path='/browse/italian' component={ItalianPage}/>
            <Route exact path='/browse/buca' component={BucaPage}/>
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
