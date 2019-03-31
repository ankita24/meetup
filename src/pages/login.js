import React from 'react';
import { login } from '../api';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const isValid = Object.keys(this.state).every(item => {
      return !!this.state[item];
    });
    if (isValid) {
      login(this.state)
        .then(() => {
          this.props.history.push('/');
        })
        .catch(err => {
          alert('Unable to login');
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
              />
            </label>
          </div>

          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
