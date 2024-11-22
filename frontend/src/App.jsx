import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import TitleUpdater from "./components/TitleUpdater";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <TitleUpdater />
          <AppRoutes />
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
