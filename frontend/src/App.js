import React from "react";
import { Route } from "react-router-dom";

import { Home, Voting, VotingResult } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/voting" component={Voting} />
      <Route exact path="/result" component={VotingResult} />
    </div>
  );
}

export default App;
