import React, { Component } from "react";
import { restPassword } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password2: "",
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
      email: this.props.location.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.restPassword(userData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    console.log(this.props.location.state);

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            {/* <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to
                home
              </Link> */}
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Reset Password</b>
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>

            <div className="col s12">
              {errors.message ? (
                <p className="error-message">{errors.message}</p>
              ) : null}
            </div>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">New Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm New Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  restPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => (
  console.log(state),
  {
    auth: state.auth,
    errors: state.errors
  }
);

export default connect(
  mapStateToProps,
  { restPassword }
)(ResetPassword);
