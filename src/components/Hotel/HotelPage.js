import React, {Component} from 'react';
import '../Common/common.css';
import {hotelItems} from "./TextBlocks";
import './AboutNEW.css';

class HotelPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
               <div className={"officeContainer"} style={{
                   width: '100%',
                   top:0,
                   left:0,
                   right:0,
                   height:'fit-content',
                   bottom:0,
                   backgroundImage: 'url(/images/hotelBack.jpg)',
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',


               }}>
                   <div  className={"officeContainer"} style={{
                       width: '100%',
                       top:0,
                       left:0,
                       right:0,
                       bottom:0,
                       height:'fit-content',

                       backgroundColor:'rgba(255,255,255,0.5)',

                   }}>

                       <p className={"OfficeTitle"}> <span>מלון חכם  </span> <span style={{color:'darkgreen'}}>וירוק </span></p>
                       <div className={"HotelCon"} style={{
                           display:'flex',
                           height:'fit-content',
                           paddingLeft:'5%',
                           paddingRight:'5%',
                           paddingBottom:100,
                           paddingTop:'40vh',
                           alignItems:'end',
                           justifyContent:'space-between'

                       }}>
                           <div className={"textBoxHotel"} style={{

                           }}>
                               <div  className={"HotelTitle"}>{hotelItems[2].title}</div>
                               <div  className={"HotelText"}>{hotelItems[2].text.split('\n').map((item, index) =>
                                   <p key={index}>{index+1}. {item}</p>)}</div>

                           </div>
                       <div className={"textBoxHotel"} style={{
                           display:'flex',
                            flexDirection:'column',

                       }}>

                           <div  className={"HotelTitle"}>{hotelItems[1].title.split('\n').map((item, index) =>
                               <p key={index}>{item}</p>)}</div>
                           <div  className={"HotelText"}>{hotelItems[1].text.split('\n').map((item, index) =>
                               <p key={index}>{item}</p>)}</div>


                       </div>

                       <div className={"textBoxHotel"} style={{

                       }}>
                           <div  className={"HotelTitle"}>{hotelItems[3].title}</div>
                           <div  className={"HotelText"}>{hotelItems[3].text.split('\n').map((item, index) =>
                               <p key={index}>{index+1}. {item}</p>)}</div>

                       </div>
                       </div>


                   </div>

               </div>

        );
    }
}

export default HotelPage;