import React from 'react';
import './App.css';
import FBLogin from './FBLogin';


export function Privacy() {
  return (<div>ZALME LLC (MGM Side Hustle - 2020) - <a href="privacy.html">Privacy Policy</a></div>);
}

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <FBLogin/>
        <Privacy />
      </div>
    );
  }
}

export default App;
