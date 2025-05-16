import React from "react";
import Usercard from "./Usercard";
import aks from "./assets/aks.png"; 

function App() {
  return (
    <div className="app">
      <Usercard
        name="Akshay Reddy"
        avatar={aks}
        title="React Front-End Developer"
        bio="Implemented Full Stack Projects and React Projects"
      />
    </div>
  );
}

export default App;
