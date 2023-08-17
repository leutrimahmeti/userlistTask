import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./router/routes";

const App: React.FC = () => {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
};

export default App;
