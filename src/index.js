import React from "react";
import ReactDOM from "react-dom";
import useLocation from "./useLocation";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  const [coords, errorMessage] = useLocation();

  const renderContent = () => {
    if (errorMessage) return <div>Error: {errorMessage}</div>;
    if (coords === null) return <Spinner message="Please accept location request"/>;
    if (coords.lat && coords.lng && !errorMessage) return <SeasonDisplay coords={coords}/>;

    return <Spinner message="Please accept location request"/>;
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector("#root"));
