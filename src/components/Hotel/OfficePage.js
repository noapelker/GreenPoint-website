import React, {Component} from 'react';
import {officePreText} from "../Home/TextBlocks";
import './AboutNEW.css';

class OfficePage extends Component {
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
                bottom:0,
                backgroundImage: 'url(/images/officeBack.jpg)',
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
                    backgroundColor:'rgba(255,255,255,0.5)',

                }}>
                </div>
                <p className={"OfficeTitle"}> <span>משרד חכם  </span> <span style={{color:'darkgreen'}}>וירוק </span></p>
                <div className={"textBox"} style={{


                }}>
                    <div  className={"OfficeText"}>{officePreText.split('\n').map((item, index) =>
                        <p key={index}>{item}</p>)}</div>


                </div>
            </div>
        );
    }
}

export default OfficePage;