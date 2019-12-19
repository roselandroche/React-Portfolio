import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>

      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/about' component={About} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
