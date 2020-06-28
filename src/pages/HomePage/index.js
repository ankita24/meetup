import React from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../../api";
class HomePage extends React.Component {
  componentDidMount() {
    console.log("hey");
    console.log("ankita");
    userInfo()
      .then(() => {
        this.props.history.push("/list");
      })
      .catch(() => {
        this.props.history.push("/login");
      });
  }
  render() {
    return (
      <div>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}
export default HomePage;
