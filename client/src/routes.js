import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/quem-somos" component={() => (<div><h1>Somos nós</h1><Link to="/">Voltar</Link></div>)} />
        </Switch>
    </BrowserRouter>
  );
}