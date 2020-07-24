import React,{useState} from "react";
import {useHistory} from "react-router-dom";

function Countdown(){

    const history = useHistory();

    const [massage,setMassage]=useState();
const [count,setCount]=useState({
    second:0,
    minute:0,
    hours:0,
    day:0
  
});

const [control,setControl]=useState(false);

var countDownDate = new Date();

document.addEventListener('DOMContentLoaded', function() {
    setControl(true);


    if(countDownDate.getHours()<=12){
        setMassage("Good Morning")
      } else{
        if(countDownDate.getHours()<=16){
          setMassage("Good Afternoon")
        } else{
          if(countDownDate.getHours()<=19){
            setMassage("Good Evening")
          } else{
            setMassage("Good Night")
          }
        }
      }
    


});
    function x(){

        setInterval(()=>{
      
    
            if(countDownDate.getMonth()===6){
                        setCount({
                            second:Math.floor(60-countDownDate.getSeconds()),
                            minute:Math.floor(60-countDownDate.getMinutes()),
                            hours:Math.floor(23-countDownDate.getHours()),
                            day: Math.floor((31-countDownDate.getDate())+27)
                        })
        
        }else{
                    if(countDownDate.getMonth()===7){
                        setCount({
                            second:Math.floor(60-countDownDate.getSeconds()),
                            minute:Math.floor(60-countDownDate.getMinutes()),
                            hours:Math.floor(23-countDownDate.getHours()),
                            day: Math.floor(27-countDownDate.getDate())
                        });
                    }
                }
        
        
        
        } ,1000)
    
    }
    


  








 if(control){
x();
 } else {
    clearInterval(x);
 }




setTimeout(()=>{
    clearInterval(x);
},10000);




  
return (
   

<div className="content toa">
    <h2>Hi!! <span>{massage}</span></h2>
    <h5>I am making a small effort to wish a memorable birthday wish</h5>
    <h5> Please keep this link, Have a small gift for you,</h5>

    <h5>This link will be open on </h5>
    <h1> Aug 28th</h1>
    <h5>It just waiting for that day till</h5>
    <h1> {count.day+" days "}  { count.hours+" hr "+ count.minute+" mm "+ count.second+" ss" }</h1>
    <h5>I will be waiting for your rehabilitation. <i className=" is far fa-smile"></i><i className=" is far fa-smile"></i> <i className=" is far fa-smile"></i> <i className=" is far fa-smile"></i></h5>

     <h5>Have a grate day.....</h5>

     <div className="row"> 
<div className="col s6 offset-s6">
     <button className="waves-effect waves-light btn modal-trigger buto" onClick={()=>{
         clearInterval(x);
        setControl(false);
        history.push("/birthday");
    }}>Agree</button>
    
    </div>
</div>

  </div>
  
     
     
 
 
        );

    }
export default Countdown;