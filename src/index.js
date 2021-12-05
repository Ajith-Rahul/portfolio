import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutme from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Header from './header';
import Contactme from './contactme';

const Routing = () => {
  return(
    <Router>
      <Header name="Ajith Rahul Sanaboina"/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/contactme" component={Contactme} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode> 
  <Routing />
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
