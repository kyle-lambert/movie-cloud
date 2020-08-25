import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./components/containers/HomeContainer";
import MoviesContainer from "./components/containers/MoviesContainer";
import ShowsContainer from "./components/containers/ShowsContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/movies" component={MoviesContainer} />
        <Route exact path="/tv-shows" component={ShowsContainer} />
      </Switch>
    </div>
  );
}

export default App;
