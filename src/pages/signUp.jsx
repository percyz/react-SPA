import React, { Component } from 'react';
import Header from '../components/header.jsx';
import '../Sign.css'; 

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      viewSignIn: true,
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onLogin = this.onLogin.bind(this);

  }

  onNameChange(event) {
    this.setState({username: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  onPasswordConfirmChange(event) {
     this.setState({passwordConfirm: event.target.value});
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onLogin() {
    console.log(`Login info: ${this.state.username}`);
  }

  onRegister() {

  }


  render() {
    return (

      <div>
      <Header />
      
      <div className="container">
          <div className="row" style={{paddingTop: 90}} >
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">

                <div className="panel-heading">
                  <div className="row">
                    <div className="col-md-6">
                      <a id="login-form-link" onClick={()=>{this.setState({viewSignIn:true})}}>Login</a>
                    </div>
                    <div className="col-md-6">
                      <a id="register-form-link" onClick={()=>{this.setState({viewSignIn:false})}}>Register</a>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">

                      {this.state.viewSignIn? 

                      <form id="login-form" method="post" role="form" onSubmit={this.onLogin} >
                        <div className="form-group">
                          <input type="text" tabindex="1" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onNameChange} />
                        </div>

                        <div className="form-group">
                          <input type="password" tabindex="2" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
                        </div>
                        <div className="form-group text-center">
                          <input type="checkbox" tabindex="3" className="" name="remember" id="remember" />
                          <label for="remember"> Remember Me</label>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input type="submit" value="Submit" tabindex="4" className="form-control btn btn-login" />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="text-center">
                                <a tabindex="5" className="forgot-password">Forgot Password?</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>

                      :

                      <form id="register-form" method="post" role="form" >
                        <div className="form-group">
                          <input type="text" tabindex="1" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onNameChange} />
                        </div>

                        <div className="form-group">
                          <input type="email" tabindex="1" className="form-control" placeholder="Email Address" value={this.state.email} onChange={this.onEmailChange} />
                        </div>

                        <div className="form-group">
                          <input type="password" tabindex="2" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
                        </div>

                        <div className="form-group">
                          <input type="password" tabindex="2" className="form-control" placeholder="Confirm Password" value={this.state.passwordConfirm} onChange={this.onPasswordConfirmChange} />
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <button type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" >Register Now</button>
                            </div>
                          </div>
                        </div>
                      </form>
                      }

                    </div>
                  </div>
                </div>
        
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
