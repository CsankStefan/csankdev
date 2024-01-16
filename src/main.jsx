import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>

        <App />

    </React.StrictMode>
  </Suspense>
);