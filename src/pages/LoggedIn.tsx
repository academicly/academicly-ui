import React from "react";
import { Router } from "@reach/router";
import { Layout } from "antd";
import Home from "./Home";
import Universities from "./Universities";
import PageNotFound from "./PageNotFound";
import NavBar from "../components/Navbar";

const LoggedIn = () => (
  <React.Fragment>
    <NavBar />
    <Layout.Content
      style={{ padding: "32px 100px" }}
      className="loggedin-layout"
    >
      <Router>
        <Home path="/" />
        <PageNotFound default path="/404" />
        <Universities path="/universities" />
      </Router>
    </Layout.Content>
  </React.Fragment>
);

export default LoggedIn;
