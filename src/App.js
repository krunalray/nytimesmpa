import React from 'react';
import AppRoutes from './AppRoutes';
import { useRoutes } from 'react-router-dom';
import GlobalDataProvider from './component/core/AppGlobalContextProvider';
import Header from './component/shared/header';
function App() {
  const routes = useRoutes(AppRoutes);
  return (
    <div className="App">      
      <React.StrictMode>
        <GlobalDataProvider>
          <Header/>
          {routes}
        </GlobalDataProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
