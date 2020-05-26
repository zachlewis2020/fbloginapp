import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import SideHustle from './SideHustle';


interface State {
  isLoggedIn: boolean
}

class FBLogin extends React.Component {

  state = { isLoggedIn: false,
            name: '',
            email: '' }

  responseFacebook = (response: any) => {
    if (response.name) {
      this.setState({ isLoggedIn: true, name: response.name, email: response.email })
    } else {
      this.setState({ isLoggedIn: false })
      alert("You must login using Facebook to use the App !")
      console.log("You must login using Facebook to use the App !")
    }
  }

  render() {

    return (
      <div className="App">
        <h1>MGM Side Hustle -  {this.state.isLoggedIn ? "Ready to Earn" : "Login"} </h1>
        <hr />
        {this.state.isLoggedIn ? <SideHustle name={this.state.name} email={this.state.email} isLoggedIn /> :
          <FacebookLogin
            appId="253330662584482"
            autoLoad={true}
            fields="name,email"
            callback={this.responseFacebook}
          />}
        <hr />
      </div>
    );
  }
}

export default FBLogin;
