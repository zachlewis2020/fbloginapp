import React from 'react';
import './App.css';

interface props { isLoggedIn: boolean;
  name: String;
  email: String 
}

class SideHustle extends React.Component<props> {

  constructor(props: Readonly<props>) {
    super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: { preventDefault: () => void; }) {

    event.preventDefault();
  }

  render() {

    return (
      <div className="App">
      Ready for Side Hustle: {this.props.name}
        <form onSubmit={this.handleSubmit}>
          <label>
            2 Gallons - Purfied Water
          <input type="checkbox" id="water" />
          </label>
          <label>
            4 Rolls Toliet Papper
          <input type="checkbox" id="tolietpaper" />
          </label>
          <label>
            4 cans of Soup with 4 pakages of Crackers
          <input type="checkbox" id="soup" />
          </label>
    
        <input type="submit" value="Submit" />
        </form>
      <hr />
      </div >
    );
  }
}

export default SideHustle;
