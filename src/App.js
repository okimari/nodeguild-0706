import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom'

// import BasicFunction from './components/BasicFunction';
// import InputPage from './components/InputPage';
// import CorporateList from './components/CorporateList';
import Dashboard from './components/Dashboard/Dashboard';




// const Home = () => {
//   return (
//     <div className="Home">
//       <p>リクパーのWEB制作管理ツール</p>
//     </div>
//   )
// }


const App = () => {
  return (

    <div className="App">
      <Dashboard />
      {/* <header>
        <h1>リクパーのWEB管理ーツール</h1>
        <BrowserRouter>
          <div className="nav-content">
            <ul>
              <li>
                <Link to="/">TOP</Link>
              </li>
              <li>
                <Link to="/CorporateList">コーポレート一覧</Link>
              </li>
              <li>
                <Link to="/BasicFunction">入れ替えできるページ</Link>
              </li>
              <li>
                <Link to="/InputPage">入力ページ</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route exact path="/CorporateList" component={CorporateList} />
            <Route exact path="/BasicFunction" component={BasicFunction} />
            <Route exact path="/InputPage" component={InputPage} />
          </div>
        </BrowserRouter>
      </header> */}
    </div>
  );
}
export default App;
