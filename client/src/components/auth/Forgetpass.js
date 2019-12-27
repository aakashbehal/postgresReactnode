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

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault(); const userData = {
            email: this.state.email,
        }; 
        this.props.forgotPassword(userData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    render() {

        const { errors } = this.state;

        return (
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Forgot Password</b>
                </h4>
                            <p className="grey-text text-darken-1">
                                Go back to <Link to="/login">Login</Link>
                            </p>
                        </div>


                        <div className="col s12">
                            { errors.message ? <p className="error-message">{errors.message}</p>  : null }
                        </div>

                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <p>A reset Link will be sent to the above email</p><Link to="/reset_password">Reset password</Link>
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
                                    Send
                  </button>
                            </div>
                        </form>
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
  
  const mapStateToProps = state => (console.log(state), {
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { forgotPassword }
  )(Forgetpass);