import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="signin-container">
      <button className='sign-in' onClick={() => openModal('login')}>Sign in</button>
      {/* &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button> */}
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
  );
};

export default Greeting;
