import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <h3>My Name is : {this.props.name} </h3>
        <h3>My Age is : {this.props.Age}</h3>
        <h3>My Country is : {this.props.Country}</h3>
      </div>
    );
  }
}

export default Profile;
