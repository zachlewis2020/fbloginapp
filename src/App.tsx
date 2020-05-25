import React from 'react';
import './App.css';
import FBLogin from './FBLogin';
import SideHustle from './SideHustle';

export function Privacy() {
  return (<div>ZALME LLC (MGM Side Hustle - 2020) - <a href="privacy.html">Privacy Policy</a></div>);
}

class App extends React.Component {

  state = { isLoggedIn: false }

  render() {

    return (
      <div className="App">
        <h1>MGM Side Hustle</h1>
        {this.state.isLoggedIn ?  <SideHustle/> : <FBLogin/> }
        <Privacy />
      </div>
    );
  }
}

export default App;
