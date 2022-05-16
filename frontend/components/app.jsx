import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal';



const App = () => (
    <div>
      <Modal />
      <header>
        <Link to="/" className="header-link">
          <h1>Ootsy</h1>
        </Link>
        <GreetingContainer />
      </header>
      <Switch>
        
      </Switch>
    </div>
  );
  
  export default App;