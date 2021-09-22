import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import "@Style/style.scss";
import "@Style/variables.scss";

import { SuspenseLoader, ErrorBoundary } from "./utilities";
import { MainRoutes } from './Routes';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <main>
          <React.Suspense fallback={<SuspenseLoader />}>
            <MainRoutes />
          </React.Suspense>
        </main>
      </Router>
    </ErrorBoundary>
  );
};

export default App;