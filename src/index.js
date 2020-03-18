import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component {
  state = {coords: {lat: null, lng: null}, errorMessage: null};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({coords: {lat: position.coords.latitude, lng: position.coords.longitude}}),
      err => this.setState({errorMessage: err.message})
    );
  };

  renderContent() {
    if (this.state.errorMessage && (!this.state.coords.lat || !this.state.coords.lng)) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.coords.lat && this.state.coords.lng && !this.state.errorMessage) {
      return <SeasonDisplay coords={this.state.coords}/>;
    }

    return <Spinner message="Please accept location request"/>;
  }

  render() {

    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
