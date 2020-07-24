import React,{useState} from "react";






function Botton(){

  
  const [triger,setTriger]=useState();
  
document.addEventListener('DOMContentLoaded', function() {
  
  var birthDate = new Date();

  if(birthDate.getMonth()===7){
    if(birthDate.getDate()>=28){
      setTriger(true)
    } else{
      setTriger(false)
    }
    
  } else{
    if(birthDate.getMonth()>7){
      setTriger(true)
    } else {
      setTriger(false)
    }
  }

});
return(
  <div className="container">

<div className="buto">
<a className="waves-effect waves-light btn modal-trigger"  href={(triger)?"rnhtml/try.html":"/count" }>Tap Here</a></div>

  </div>
)

}
export default Botton;
