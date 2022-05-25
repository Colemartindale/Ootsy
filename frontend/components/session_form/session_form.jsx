import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInDemo = this.signInDemo.bind(this);
  };

  componentDidMount(){
    this.props.resetErrors()
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  signInDemo(e) {
    e.preventDefault();
    const user = {username: 'demo user', password: 'demopw'}
    this.props.processForm(user).then(this.props.closeModal);
  };

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let errorOcc;
    let errors;
    if (this.props.errors.length > 0) {
      errorOcc = 'error-occ'
      errors = 'errors'
    } else {
      errorOcc = 'signin-input'
      errors = ""
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className='modal-header'>
            <span className='current-modal-form'>{this.props.formType}</span>
            <span className='other-form-button'>{this.props.otherForm}</span>
          </div>
          
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <div className="login-form">
            <br/>
            <label> <span className='input-title'>Username</span> 
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className={errorOcc}
              />
            </label>
            <span className={errors}>{this.renderErrors()}</span>
            <br/>
            <br />
            <label> <span className='input-title'>Password</span> 
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <button onClick={this.signInDemo} className='demo-user'>Demo User Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;