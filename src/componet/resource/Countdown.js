import React,{useState} from "react";

function Countdown(props){

const [count,setCount]=useState({
    second:0,
    minute:0,
    hours:0,
    day:0
  
});
var countDownDate = new Date();
 
var x=setInterval(()=>{
  

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



} ,2000)


  if(props.control){
    clearInterval(x);
}

setTimeout(()=>{
    clearInterval(x);
},10000);

return (
    <div>
     <h1> {count.day+" days "}  { count.hours+" hr "+ count.minute+" mm "+ count.second+" ss" }</h1>
     
     
    </div>
        );

    }
export default Countdown;