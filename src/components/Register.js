import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "./utility/FormValidation";

export default class Register extends Component {

  state = {
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: null
    }
  }

  clearState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }
    console.log(`STATE :: email :: ${this.state.email} :: password :: ${this.state.password}`)
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <div className="container">
        <div className="register">
          <h2>Register</h2>
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input 
                  id="email"
                  className="input" 
                  type="email" 
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={this.onInputChange}
                  />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  id="password"
                  className="input" 
                  type="password" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  id="confirmpassword"
                  className="input" 
                  type="password" 
                  placeholder="Confirm password" 
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
