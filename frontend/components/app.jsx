import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link,} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SearchBarContainer from './search/search_bar_container';
import Cart from './cart/cart';
import ListingIndexContainer from './listing_index/listing_index_container';
import ListingShowContainer from './listing_show/listing_show_container';
import CategoryContainer from './category_index/category_index_container';
import SearchPageContainer from './search/search_page_container';
import Footer from './footer';

const App = () => (

    <div className='main'>
      <Modal />
      <div className='nav-bar'>
        <header className='header'>
          <ul className='header-links'>
            <li className='ootsy-logo-li'><Link to="/" className='ootsy-home'>
              <h1>Ootsy</h1>
            </Link></li>
            <li className='search-li'><SearchBarContainer /></li>
            <li className='greeting-li'><GreetingContainer /></li>
            <li className='cart-li'><Cart/></li>
          </ul>
        </header>
      </div>

      <ul className='categories-container'>
        <li><Link to='/listings/category/fathers' className='cat'>Father's Day Gifts</Link></li>
        <li><Link to='/listings/category/accessories' className='cat'>Jewelry & Accessories</Link></li>
        <li><Link to='/listings/category/clothing' className='cat'>Clothing & Shoes</Link></li>
        <li><Link to='/listings/category/home' className='cat'>Home & Living</Link></li>
        <li><Link to='/listings/category/smash' className='cat'>Super Smash Bros</Link></li>
        <li><Link to='/listings/category/toys' className='cat'>Toys & Entertainment</Link></li>
        <li><Link to='/listings/category/art' className='cat'>Art & Collectibles</Link></li>
        <li><Link to='/listings/category/electronics' className='cat'>Electronics</Link></li>
      </ul>

      <span className='header-border'></span>

      <Switch>
        <Route exact path='/' component={ListingIndexContainer}/>
        <Route exact path='/orders' render={() => <h1>order History</h1>}/>
        <Route exact path='/cart' render={() => <h1>Cart</h1>}/>
        <Route path='/listings/category/:category' component={CategoryContainer}/>
        <Route path='/listings/search/:query' component={SearchPageContainer} />
        <Route path='/listings/:listingId' component={ListingShowContainer}/>
        <Redirect to='/'/>
      </Switch>

      <Footer/>
    </div>
  );
  
  export default App;