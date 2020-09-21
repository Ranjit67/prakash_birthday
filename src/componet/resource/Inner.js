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
      {id: 2, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/53165212_622927511468970_2545782022924664832_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=SkveLyrGcIcAX91Trdd&_nc_ht=scontent.fbbi3-1.fna&oh=37bf240965a9f854f401c6f5f13d3acc&oe=5F8CEFFE'},
      {id: 3, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/47680461_570942786667443_3038592871184728064_n.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=0VUBXMT6wuoAX_P7duw&_nc_ht=scontent.fbbi3-1.fna&oh=f369872f74bd8a5c7ea97fe815fa2fe1&oe=5F8EBEA8'},
      {id: 4, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/38446567_496738054087917_2652012537138118656_n.jpg?_nc_cat=104&_nc_sid=05277f&_nc_ohc=K53bhSysCBwAX8rzYL9&_nc_ht=scontent.fbbi3-1.fna&oh=1dbfaa72787e890ace4e4831e868a2b2&oe=5F8E63FC'},
      {id: 5, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/42366713_531274463967609_4975379150358446080_n.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=1bGmh6hWovcAX8Dkx0g&_nc_ht=scontent.fbbi3-1.fna&oh=184f6c1bbe4a5e25f091f4375f79e76a&oe=5F8C5E0E'},
      {id: 6, title: 'https://scontent.fbbi3-1.fna.fbcdn.net/v/t31.0-8/s960x960/13582101_133552210406505_8941049242562205228_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=kA7j5kXqctwAX8gE-ax&_nc_ht=scontent.fbbi3-1.fna&tp=7&oh=eff19250a4e8578ea4f870e5c504fc35&oe=5F8F09C7'}
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