import React from "react";
import { Router, Route } from "wouter";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { Results } from "./pages/Results";

export const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/results" component={Results} />
    </Router>
  );
};
