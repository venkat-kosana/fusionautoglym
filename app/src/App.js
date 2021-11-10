import React from "react";
import HomePage from "./HomePage";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Plans from "./Plans";
import Scrolltotop from "./Scrolltotop";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contactus from "./Contactus";

function App() {
  return (
    <BrowserRouter>
      <Scrolltotop></Scrolltotop>
      <Navbar></Navbar>,
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contactus} />
        <Route exact path="/plans" component={Plans} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
