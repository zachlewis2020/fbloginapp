import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import SideHustle from './SideHustle';


interface State {
  isLoggedIn: boolean
}

class FBLogin extends React.Component {
 
  state = { isLoggedIn: false }

  responseFacebook = (response: any) => {
    console.log("Status:(" + response + ")")
    if (response.status === 'connected') {
      this.setState({isLoggedIn: true})
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  render() {

    return (
      <div className="App">
        <h1>MGM Side Hustle - Facebook Login</h1>
        <hr />
        {this.state.isLoggedIn ? <SideHustle/> :
        <FacebookLogin
          appId="253330662584482"
          autoLoad={true}
          fields="email"
          scope="public_profile"
          callback={this.responseFacebook}
        />}
        <hr />
      </div>
    );
  }
}

export default FBLogin;