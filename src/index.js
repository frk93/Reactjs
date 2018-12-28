import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      error => {
        this.setState({
          err: error.message
        });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.error) {
      return <SeasonDisplay lat={this.state.lat} month={new Date().getMonth} />;
    }

    if (!this.state.lat && this.state.error) {
      return <div>Error Occured : {this.state.error}</div>;
    }

    return <Loader />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
