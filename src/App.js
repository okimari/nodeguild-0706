import React from 'react';

import BasicFunction from './components/BasicFunction';

import CorporateList from './components/CorporateList';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>リクパーのWEB管理ーツール</h1>
      </header>
      <BasicFunction />
      <CorporateList />
    </div>
  );
}

export default App;
