import React from 'react';
import { Link } from 'react-router-dom';

// const Greeting = ({ currentUser, logout, openModal }) => {
class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.toggleDropDown = this.toggleDropDown.bind(this)
  };

  sessionLinks() {
    return (
      <nav className="signin-container">
        <button type='button' className='sign-in' onClick={() => this.props.openModal('login')}>Sign in</button>
      </nav>
    )
  };

  componentDidMount(){
    let dropDown = document.querySelector('.dropdown-content');
    if (dropDown) {
      dropDown.style.display = 'none';
    }  
  };

  dropDown(e) {
    if (!e.target.closest(".profile-dropdown") && !e.target.closest(".dropdown-content")) {
        document.querySelector(".dropdown-content").style.display = 'none'
        document.removeEventListener("click", this.dropDown)
    }
  }

  toggleDropDown() {
    let dropDown = document.querySelector('.dropdown-content');
    if (dropDown.style.display === 'none' || dropDown.style.display === '') {
      dropDown.style.display = 'flex'
      document.addEventListener('click', this.dropDown)
    } else {
      dropDown.style.display = 'none'
      document.removeEventListener('click', this.dropDown)
    };
  };
  
  personalIcons() {
    return (
      <div className="profile-dropdown" onClick={this.toggleDropDown}>
        <img src={window.profilePicLogo} className='profile-logo' />
        <img src={window.downArrowIcon} className='down-arrow-icon' />
        <div className='dropdown-content'>
          <div className='email-container'>
            <img src={window.profilePicLogo} className='profile-logo' />
            <span>{this.props.currentUser.username}</span>
          </div>
          {/* <div className='orders-container'>
            <img src={window.ordersIcon} className='orders-icon' />
            <Link to='/orders'>Order History</Link>
          </div> */}
          <div className='sign-out-container'>
            <img src={window.signOutIcon} className='sign-out-icon' />
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      this.props.currentUser ? this.personalIcons(this.props.currentUser, this.props.logout) : this.sessionLinks()
    );
  };
};
 
export default Greeting;
