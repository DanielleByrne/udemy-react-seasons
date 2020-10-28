import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
 
  state = { lat:null, errorMessage: ""}
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    //if we have an error message and no lat
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    //if we don't have an error message but we do have the lat
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat = {this.state.lat}/>
    }

    return <div>Loading!</div>;

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
