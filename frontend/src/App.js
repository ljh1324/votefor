import React from "react";
import { Route } from "react-router-dom";

import { AppProvider } from "./context";
import { Home, SelectCategory, VotingResult, PromiseSelecting, NotFound } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={SelectCategory} />
        <Route exact path="/promise/:page" component={PromiseSelecting} />
        <Route exact path="/result" component={VotingResult} />
        <Route exact path="*" component={NotFound} />
      </AppProvider>
    </div>
  );
}

export default App;
