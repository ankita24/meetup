import React from 'react';
import { register } from '../api';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleBlur(e) {
    if (
      this.state.password.length > 0 ||
      this.state.confirmpassword.length > 0
    ) {
      if (this.state.password !== this.state.confirmpassword) {
        this.setState({
          error: true
        });
      } else {
        this.setState({
          error: false
        });
      }
    } else {
      this.setState({
        error: false
      });
    }
  }

  handleClick(e) {
    e.preventDefault();
    const isValid = Object.keys(this.state).every(item => {
      if (typeof this.state[item] !== 'string') return true;
      return !!this.state[item];
    });
    if (isValid) {
      register(this.state)
        .catch(err => {
          alert('Unable to register');
        })
        .then(() => {
          this.props.history.push('/login');
        });
    } else {
      alert('fill the form please');
    }
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                placeholder="name"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
          </div>
          <div>
            <label htmlFor="confirmpassword">
              Confirm Password:
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                id="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
            {this.state.error && <p>Password doesn't match</p>}
          </div>
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
