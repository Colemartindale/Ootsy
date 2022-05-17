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
import GreetingContainer from './greeting/greeting_container';
import SearchBar from './search/search';
import Cart from './cart/cart';

const App = () => (
    <div className='main'>
      <Modal />
      <header className='header'>
        <Link to="/" className='ootsy-home'>
          <h1>Ootsy</h1>
        </Link>
        <SearchBar />
        <GreetingContainer />
        <Cart />
      </header>
      {/* <Switch>
        
      </Switch> */}
    </div>
  );
  
  export default App;