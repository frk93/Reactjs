import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <h1>First Clock Component</h1>
        <div className="time">The time is: {this.state.time}</div>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
