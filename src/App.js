import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import RecipePage from "./containers/RecipePage";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <div className="nav"></div>
      <RecipePage />
      <div className="footer"></div>
    </div>
  );
}

export default App;
