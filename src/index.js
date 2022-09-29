import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Router from 'Routes';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from 'Modules/rootReducer';
import GlobalStyle from 'Styles/GlobalStyle';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
