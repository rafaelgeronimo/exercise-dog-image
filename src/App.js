import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDog = this.fetchDog.bind(this);
    this.state = {
      dog: ""
    }
  };

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(result => this.setState({ dog: result }));
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    if (this.state.dog === "") return "loading...";
    return (
      <>
      <div className="dog-image">
        <img src={this.state.dog.message} alt="Cachorrinho"/>
      </div>
      </>
    );
  }
}

export default App;
