import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="signin-container">
      <button className='sign-in' onClick={() => openModal('login')}>Sign in</button>
      {/* &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button> */}
    </nav>
  );

  const toggleDropDown = () => {
    let dropDown = document.querySelector('.dropdown-content');
    if (dropDown.id) {
      dropDown.id = null
    } else {
      dropDown.id = 'show'
    };
  };

  const personalIcons = () => {
    return (
      <div className="profile-dropdown" onClick={toggleDropDown}>
        <img src={window.profilePicLogo} className='profile-logo' />
        <img src={window.downArrowIcon} className='down-arrow-icon' />
        <div className='dropdown-content'>
          <div className='email-container'>
            <img src={window.profilePicLogo} className='profile-logo' />
            <span>{currentUser.email}</span>
          </div>
          <div className='orders-container'>
            <img src={window.ordersIcon} className='orders-icon' />
            <span>Order History</span>
          </div>
          <div className='sign-out-container'>
            <img src={window.signOutIcon} className='sign-out-icon' />
            <button className="logout-button" onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    currentUser ? personalIcons(currentUser, logout) : sessionLinks()
  );
};
 
export default Greeting;
