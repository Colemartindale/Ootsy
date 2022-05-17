import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="signin-container">
      <button className='sign-in' onClick={() => openModal('login')}>Sign in</button>
      {/* &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button> */}
    </nav>
  );
  const personalIcons = () => (
    <ul className="profile-dropdown">
      <img src={window.profilePicLogo} className='profile-logo' />
      <button className="logout-button" onClick={logout}>Log Out</button>
    </ul>
  );

  return (
    currentUser ? personalIcons(currentUser, logout) : sessionLinks()
  );
};
 
export default Greeting;
