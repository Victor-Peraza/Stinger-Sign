import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <body><div class="logo"></div>
      <div class="page-centered">
              <h1 class="login-h1">Stinger Sign</h1>
        <h2 class="login-h2">Login</h2>
        <form onSubmit={this.login} className="form-signin">
              <div class="textLabel">Email</div>
              <input
                type="text"
                name="user_id"
                required class="form-input"
                onChange={this.handleFormChange}
                placeholder="herky@csus.edu"
              />
              <div class="textLabel">Password</div>
              <input
                type="password"
                name="user_password"
                required class="form-input"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
              <input type="submit" class="form-submit" value="Login" />
              <Link to={`/Register`}><input type="button" class="form-register" value="Sign Up"></input></Link>
        </form>
        </div>
      </body>
    );
  }
}
export default Login;
