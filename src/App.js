import React from 'react';
import './App.css';
import RecipePage from "./containers/RecipePage";

function App() {
  return (
    <div className="App">
      <div className="nav"></div>
      <RecipePage />
      {/*components go here*/}
      <div className="footer"></div>
    </div>
  );
}

export default App;
