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
    console.log(response.status)
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
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />}
        <hr />
      </div>
    );
  }
}

export default FBLogin;
