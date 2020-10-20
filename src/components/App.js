import React, { Component } from "react";
import Route from "./Route";
import Header from "./layout/Header";
import Unsplash from "./unsplash/Unsplash";
import Youtube from "./youtube/Youtube";
import Footer from "../components/layout/Footer";
class App extends Component {
  render() {
    return (
      <>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/unsplash">
          <Unsplash />
        </Route>
        <Route path="/youtube">
          <Youtube />
        </Route>
        <Footer />
      </>
    );
  }
}
export default App;
