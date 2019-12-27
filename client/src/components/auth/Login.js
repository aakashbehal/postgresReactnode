import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
            <div className="row flex-grow">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="auth-form-transparent text-left p-3">
                  <div className="brand-logo">
                    <img src="./images/logo.svg" alt="logo" />
                  </div>
                  <h4>Welcome back!</h4>
                  <h6 className="font-weight-light">Happy to see you again!</h6>
                  <div className="col s12">
                    {errors.message ? (
                      <p className="error-message">{errors.message}</p>
                    ) : null}
                  </div>
                  <form className="pt-3" noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Username</label>
                      <div className="input-group">
                        <div className="input-group-prepend bg-transparent">
                          <span className="input-group-text bg-transparent border-right-0">
                            <i className="mdi mdi-account-outline text-primary"></i>
                          </span>
                        </div>
                        <input
                          onChange={this.onChange}
                          value={this.state.email}
                          type="email"
                          className="form-control form-control-lg border-left-0"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="input-group">
                        <div className="input-group-prepend bg-transparent">
                          <span className="input-group-text bg-transparent border-right-0">
                            <i className="mdi mdi-lock-outline text-primary"></i>
                          </span>
                        </div>
                        <input
                          onChange={this.onChange}
                          value={this.state.password}
                          type="password"
                          className="form-control form-control-lg border-left-0"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <Link
                        className="auth-link text-black"
                        to="/forget_password"
                      >
                        Forgot Password
                      </Link>
                    </div>
                    <div className="my-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        LOGIN
                      </button>
                    </div>
                    <div className="mb-2 d-flex">
                      <button
                        type="button"
                        className="btn btn-facebook auth-form-btn flex-grow mr-1"
                      >
                        <i className="mdi mdi-facebook mr-2"></i>Facebook
                      </button>
                      <button
                        type="button"
                        className="btn btn-google auth-form-btn flex-grow ml-1"
                      >
                        <i className="mdi mdi-google mr-2"></i>Google
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account? <Link to="/register">Create</Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 login-half-bg d-flex flex-row">
                <p className="text-white font-weight-medium text-center flex-grow align-self-end">
                  Copyright &copy; 2019 All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
