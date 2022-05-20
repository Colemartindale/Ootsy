import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SearchBar from './search/search';
import Cart from './cart/cart';
import ListingIndexContainer from './listing_index/listing_index_container';

const App = () => (
    <div className='main'>
      <Modal />
      <div className='nav-bar'>
      <header className='header'>
        <ul className='header-links'>
          <li className='ootsy-logo-li'><Link to="/" className='ootsy-home'>
            <h1>Ootsy</h1>
          </Link></li>
          <li className='search-li'><SearchBar /></li>
          <li className='greeting-li'><GreetingContainer /></li>
          <li className='cart-li'><Cart /></li>
        </ul>
        <ul className='header-nav-links'>
          <li><Link to=''></Link></li>
          
        </ul>
      </header>
      </div>
      <Switch>
        <Route exact path='/' component={ListingIndexContainer}/>
        <Route exact path='/orders' render={() => <h1>order History</h1>}/>
        <Route exact path='/cart' render={() => <h1>Cart</h1>}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
  
  export default App;