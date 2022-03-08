import * as React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Portfolio from '../portfolio/portfolio';
import Resume from '../Resume/Resume';
import Technologies from '../technologies/technologies';
import './header.css';

const pages = [
  { href: '', tab: 'Technologies', element: <Technologies /> },
  { href: 'Resume', tab: 'Resume', element: <Resume /> },
  { href: 'About', tab: 'About', element: <About /> },
  { href: 'porfoleio', tab: 'porfoleio', element: <Portfolio /> },
 ];

const links = pages.map((page) => <NavLink to={`/${page.href}`} key={page.tab}>{page.tab}</NavLink>);
const routes = pages.map((page) => <Route path={`/${page.href}`} key={page.tab} element={page.element} />);
const Header = () => {

  return (<Router>
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          Omer Levy
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        {links}
      </div>
    </div>
    <Routes>
      {routes}
    </Routes>
  </Router>

  );
};
export default Header;