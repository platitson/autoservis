import styles from './App.module.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Feedbacks from './components/Feedbacks/Feedbacks';
import { Translation } from './utils/languageSwitch';

function App() {

  function translate(event) {
    const translation = new Translation();
    translation.init();
    translation.initPassTranslationEventListener();
    event.preventDefault();
    const myEvent = new CustomEvent('passTranslation', { detail: event.target.dataset["languageKey"] });
    window.dispatchEvent(myEvent);
  }

  return (
    <Router>
      <header>
        <div className={styles.navBar}>
          <nav>
            <ul>
              <li>
                <NavLink exact className={styles.link} activeClassName={styles.selectedNavLink} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={styles.link} activeClassName={styles.selectedNavLink} to="/services">Our services</NavLink>
              </li>
              <li>
                <NavLink className={styles.link} activeClassName={styles.selectedNavLink} to="/feedbacks">Feedbacks</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <div data-language-key="EN" onClick={translate} className={styles.langLink}>EN</div>
            <div data-language-key="CZ" onClick={translate} className={styles.langLink}>CZ</div>
          </div>
        </div>
      </header>

      <Switch>
        <Route path="/feedbacks">
          <Feedbacks />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;