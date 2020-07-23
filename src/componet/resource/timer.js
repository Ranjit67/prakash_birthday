import React, {useState} from "react";



function Timer(prop){
console.log(prop.p);
    const [date,setDate]=useState({
        second:"",
        minute:"",
        hours:"",
        dated:"",
        month:""
    });

  
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        var birthDate = new Date();
        
        setDate({
            second: birthDate.getSeconds(),
            minute:birthDate.getMinutes(),
            hours:birthDate.getHours(),
            dated:birthDate.getDate(),
            month:monthNames[birthDate.getMonth()]
        });
    

   
    // setInterval(() => {
    //     update();
    //   clearInterval();
    // }, 3000)
   
  
    return(
<div>
<h1>Dated:  {date.month+":"+date.dated} </h1>
<h1>{date.hours+":"+date.minute+":"+date.second+" s" }</h1>
 
</div>
    );
}
export default Timer;


