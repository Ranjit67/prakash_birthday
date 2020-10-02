// import React ,{Component} from "react";
// import Carousel from "react-elastic-carousel";
// import Card from "./Card";
// class Inner extends Component{
//     render(){
//         return(
            
//             <Carousel>
//                 <Card number="1"/>
//                 <Card number="2"/>
//                 <Card number="3"/>
//                 <Card number="4"/>
//                 <Card number="5"/>
//                 </Carousel>
              
//         )
//     }
// }






import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "styled-components";
 
class Inner extends Component {
  state = {
    items: [
        {id: 1, title:"https://www.birthdaywishes.expert/wp-content/uploads/2015/11/cover-photo-for-happy-birthday-messages.jpg"},
      {id: 2, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/s960x960/87835948_1484982115006187_8585581462256877568_o.jpg?_nc_cat=102&_nc_sid=05277f&_nc_ohc=0udvjdEeyM8AX_vaBSf&_nc_ht=scontent.fbbi3-1.fna&tp=7&oh=3561691269899290a62c32c7bde30c02&oe=5F9B2049'},
      {id: 3, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/s960x960/62557220_1264430973727970_4596276246999990272_o.jpg?_nc_cat=107&_nc_sid=05277f&_nc_ohc=_oj0AuzzjBMAX-gQ2sU&_nc_ht=scontent.fbbi3-1.fna&tp=7&oh=a70b9a9f96ecac7026ed0b35d8071e90&oe=5F9E0AC6'},
      {id: 4, title: 'https://res.cloudinary.com/dnrnwqpel/image/upload/v1601631057/rosy_nana/Untitled_design_gp6h5z.jpg'},
      {id: 5, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/p720x720/52840217_1188709881300080_5469543733655502848_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=6k8iD0vLiO4AX8SnAoY&_nc_ht=scontent.fbbi3-1.fna&tp=6&oh=6914df5e10f6bccf3608971e8874ba15&oe=5F9D051B'},
      {id: 6, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/s960x960/51398916_1170871023083966_5167130628168089600_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=A4P4zvcBErcAX93YKJT&_nc_ht=scontent.fbbi3-1.fna&tp=7&oh=3423b95721ec8e752734609f75462d84&oe=5F9D9A2C'}
    ]
  }
 
  render () {
    const { items } = this.state;
    return (<div className="col-md-12 second">
  
      <Carousel>
        {items.map(item => <div key={item.id}><img className="gh" src={item.title} alt="image not foud" /></div>)}
      </Carousel>
      
              </div>
    )
  }
}
export default Inner;