import React from "react";
import { Layout } from "antd";
import LoggedIn from "./pages/LoggedIn";
import LoggedOut from "./pages/LoggedOut";
import { AuthProvider } from "./providers/AuthProvider";
import { useAuth } from "./hooks";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="App-container">
      <Layout>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</Layout>
    </div>
  );
};

const RootApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
export default RootApp;
