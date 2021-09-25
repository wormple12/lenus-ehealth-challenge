import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import "@Style/style.scss";
import "@Style/variables.scss";

import { ErrorBoundary } from "./utilities";
import { MainRoutes } from './Routes';
import { AppBar } from './shared';

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <AppBar />
      </header>
      <main>
        <ErrorBoundary>
          <MainRoutes />
        </ErrorBoundary>
      </main>
    </Router>
  );
};

export default App;