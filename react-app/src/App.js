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

function App() {
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
            <NavLink to="#" data-lang="english" className={styles.langLink}>EN</NavLink>
            <NavLink to="#" data-lang="czech" className={styles.langLink}>CZ</NavLink>
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