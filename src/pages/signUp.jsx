import React, { Component } from 'react';
import Header from '../components/header.jsx';
import '../Sign.css'; 

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      viewSignIn: true,
    }
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

                      <form id="login-form" action="https://phpoll.com/login/process" method="post" role="form" >
                        <div className="form-group">
                          <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
                        </div>

                        <div className="form-group">
                          <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group text-center">
                          <input type="checkbox" tabindex="3" className="" name="remember" id="remember" />
                          <label for="remember"> Remember Me</label>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <button type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login">Log In</button>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="text-center">
                                <a href="https://phpoll.com/recover" tabindex="5" className="forgot-password">Forgot Password?</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>

                      :

                      <form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" >
                        <div className="form-group">
                          <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
                        </div>

                        <div className="form-group">
                          <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" value="" />
                        </div>

                        <div className="form-group">
                          <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
                        </div>

                        <div className="form-group">
                          <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password" />
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
