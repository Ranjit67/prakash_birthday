import React,{useState} from "react";

import Countdown from "./Countdown";
import M from "materialize-css";



function Botton(){


const [control,setControl]= useState(true);
const [popof,setPopof]=useState(false);
const [triger,setTriger]=useState();
const [massage,setMassage]=useState();

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems);


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

  
  // massage
  if(birthDate.getHours()<=12){
    setMassage("Good Morning")
  } else{
    if(birthDate.getHours()<=16){
      setMassage("Good Afternoon")
    } else{
      if(birthDate.getHours()<=19){
        setMassage("Good Evening")
      } else{
        setMassage("Good Night")
      }
    }
  }

  });

  document.addEventListener("click",()=>{
      if(popof){
        setControl(true)
      }
     
    });



  return(
    <div className="container">
<div className="buto">
<a className="waves-effect waves-light btn modal-trigger" onClick={()=>{
  if(triger){
    setControl(true)
  } else {
    setControl(false)
  }
}}  href={(triger)?"rnhtml/try.html":"#modal1"}>Tap Here</a></div>


<div id="modal1" className="modal">
  <div className="modal-content toa">
    <h2>Hi!! <span>{massage}</span></h2>
    <h5>I am making a small effort to wish a memorable birthday wish</h5>
    <h5> Please keep this link, Have a small gift for you,</h5>

    <h5>This link will be open on </h5>
    <h1> Aug 28th</h1>
    <h5>It just waiting for that day till</h5>
    <Countdown 
            control={control}
    />
    <h5>I will be waiting for your rehabilitation. <i className=" is far fa-smile"></i><i className=" is far fa-smile"></i> <i className=" is far fa-smile"></i> <i className=" is far fa-smile"></i></h5>

     <h5>Have a grate day.....</h5>
  </div>
  <div className="modal-footer">
    <button className="modal-close waves-effect waves-green btn-flat agree" onClick={()=>{
      setPopof(true);
      setControl(true);
    }}>Agree</button>
  </div>
</div>

    </div>
  )
}

export default Botton;




// 'August 28, 08 04:20'




// const [control,setControl]= useState(true);
// const [popof,setPopof]=useState(false);

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);

//   });


// document.addEventListener("click",(popof)=>{
//   if(popof){
//     setControl(true);
//   }
 
// })





// const [triger,setTriger]=useState({
//   b:"",
//   m:""
// });



// // console.log(contro);
// // console.log(triger);


// //extra
// document.addEventListener('DOMContentLoaded', function() {

//   var birthDate = new Date('August 28, 08 04:20');

//  if(birthDate.getMonth()==7){
//   setTriger({
//     b:true
//   });
//  }

  
  // massage
//   if(birthDate.getHours()<=12){
//     setTriger({
//       m:"Good Morning"
//     });
//   } else{
//     if(birthDate.getHours()<=16){
//       setTriger({
//         m:"Good Afternoon"
//       });
//     } else{
//       if(birthDate.getHours()<=19){
//         setTriger({
//           m:"Good Evening"
//         });
//       } else{
//         setTriger({
//           m:"Good Night"
//         });
//       }
//     }
//   }
// });







// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import M from "materialize-css"
// import Timer from "./timer";

// function Botton(props){
//   const {
//     buttonLabel,
//     classNameName
//   } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>Tap Here</Button>
//       <Modal isOpen={modal} toggle={toggle} classNameName={classNameName}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }
// export default Botton;


// href={(props.propoty)?"rnhtml/try.html":"#modal1"}