import React, { Component } from "react";
import { forgotPassword } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Forgetpass extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
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
      email: this.state.email
    };

    this.props.forgotPassword(userData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
            
                    <div className="text-center mt-4 font-weight-light">
                      <p>A reset Link will be sent to the above email</p>
                    </div>
                    <div className="my-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        SEND
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

Forgetpass.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { forgotPassword })(Forgetpass);
