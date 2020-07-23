import React from 'react';
// import $ from "jquery";
import {BrowserRouter,Route} from "react-router-dom";
// import  "materialize-css";
// import M from "react-materialize";
import Birthday from "./componet/Birthday.js";

import Trial from "./componet/Trial.js";
import Botton from "./componet/resource/Botton.js"
import './App.css';




function App() {
  return (
   
    <BrowserRouter>
  
<Route exact path="/">

<Trial />

</Route>
<Route path="/birthday">

<Birthday />

</Route>



<Route path="/botton">
<header>
<Botton />
</header>
</Route>



</BrowserRouter>

  );
}

export default App;











