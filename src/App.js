import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import RecipePage from "./containers/RecipePage";
import "./App.scss";
import NavigationBar from "./components/Navbar";

function App() {

  return (
    <>
    <NavigationBar/>
      <RecipePage />
      <div className="footer"></div>
    </>
  );
}

export default App;
