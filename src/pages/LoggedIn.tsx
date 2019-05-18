import React from "react";
import { Router } from "@reach/router";
import { Layout } from "antd";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import NavBar from "../components/Navbar";

const LoggedIn = () => (
  <React.Fragment>
    <NavBar />
    <Layout.Content className="loggedin-layout">
      <Router>
        <Home path="/" />
        <PageNotFound default path="/404" />
      </Router>
    </Layout.Content>
  </React.Fragment>
);

export default LoggedIn;
