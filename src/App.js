import React, {Component} from 'react';
import Navbar from "./componet/resource/Navbar";
import Inner from "./componet/resource/Inner";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component{
  render(){
    return(
     
      <div className="row">
        <div className="col-md-12"> <Navbar /></div>
        
       

          <div className=" col-offset-md-1 col-md-10 hap">
          
          <img className="col-md-12 imo" src="https://res.cloudinary.com/dnrnwqpel/image/upload/v1600675194/rosy_nana/Pink_and_Violet_Cupcake_Birthday_Picture_Postcard_swsnsu.jpg"
           alt="Paris" />
          </div>

         <Inner />

           

        </div>
    )
  }
}
export default App;










