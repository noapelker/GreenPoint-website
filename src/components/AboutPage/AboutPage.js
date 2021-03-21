import React, {Component} from 'react';
import {
    about0,
    aboutNew, aboutNew2
} from "./TextBlocks";
import '../Common/common.css'
import ContactPage from "../Common/ContactPage";

class AboutPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            infoTitle: 'קצת יותר עלינו',
            infoNum: 0

        };
        window.scrollTo(0, 0);

    }

    changInfo = (e) => {
        this.setState({
            infoTitle: (e.target.value).substr(1, e.target.value.length - 1),
            infoNum: e.target.value.charAt(0)
        });
        console.log(this.state.infoNum)
    }

    render() {
        return (
            <>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '70'}}>
                <div className={'page_top_root'} style={
                    {
                        height: '30%',
                        backgroundImage: 'url(/images/GreenLogo.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',

                        backgroundSize: 'cover',

                    }
                }>
                    {/* <img className={'page_top_img'} src={'/images/AboutPic.jpg'} alt={''}/>*/}
                    <div className={'page_top_img2'}
                    >
                        <div style={{
                            width: '100%',
                            height: '20%',
                            alignment: 'center',
                            marginTop: '10%',
                            textAlign: 'center',
                        }}>
                            <p className={"title2"} style={{
                                width: '100%',
                                color: '#383838'
                            }}> <span style={{
                                width: '100%',
                                color: '#383838'
                            }}> ברוכים הבאים לבית החכם של </span><span style={{
                                width: '100%',
                                color: '#003f00'
                            }}>Green Point </span></p>
                            <p style={{
                                width: '100%',
                                fontSize: '1.3em',
                                color: '#6f6f6f',
                                marginTop: '0'
                            }}>{about0}</p>

                        </div>
                    </div>
                </div>
                <div className={"picClass"}>
                    <div className={" blackImage"} style={
                        {}
                    }>
                        <span className={"titleAbout"} id={"titleFirst"} style={{}}>אודות</span>


                        <div style={{
                            width: '90%',
                            height: '100%',
                            display: 'flex',
                            direction: 'rtl',
                            marginTop: '3%',
                            marginBottom: '10%'
                        }}>
                            <div style={{flex: 1, textAlign: 'rtl'}}>
                                {aboutNew2.split('\n').map((item, index) => (index === 0 ?
                                    <div key={index} style={{
                                        display: 'flex',
                                        width: '100%',
                                        direction: 'rtl',
                                        fontFamily: 'Assistant light',
                                        alignSelf: 'flex-end',

                                    }}>
                                        <p className={"aboutInfo"}
                                           style={{
                                               flex: 1,
                                               width: '100%',

                                               alignSelf: 'flex-start',
                                               direction: 'rtl',
                                               fontFamily: 'Assistant light',

                                           }}>{item}</p>

                                    </div>
                                    : <p className={"aboutInfo"}
                                         style={{width: '100%', direction: 'rtl', fontFamily: 'Assistant light',}}
                                         key={index}>{item}</p>))}
                            </div>

                        </div>

                    </div>

                    <img src={'/images/NewAbout.jpg'} alt={''} id={"imageLarge"} style={
                        {
                            opacity: '0.7',
                            boxShadow: ' 0 0 5px 0 rgba(0,0,0,0.5)',
                        }

                    }
                    />
                </div>
                <div style={
                    {
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        marginTop: 0,
                        height: '100%',
                        width: '100%',
                        justifyContent: 'flex-start',
                        paddingRight: '7%',
                        paddingLeft: '5%',
                        marginBottom: '0%'

                    }
                }>
                    <div className={"aboutSecondInfo"}>
                        <p className={"titleAbout"}>{this.state.infoTitle}</p>

                        {aboutNew[this.state.infoNum].split('\n').map((item, index) =>

                            <p className={((index === 5 && this.state.infoNum === 1) || (index === 0 && this.state.infoNum === 2)) ? "aboutExplainSec" : "aboutExplain"}
                               style={{width: '100%'}} key={index}>{item}</p>)}
                    </div>
                    <div id={"lineContainer"} style={{
                        textAlign: 'right',
                        width: '50%',
                        height: '100%',
                        position: 'relative',
                        display: 'flex',
                        direction: 'rtl',
                        flexDirection: 'column'
                        ,
                    }}>

                        <div id={"line"}/>


                        <form action={" "} id={"buttonContainer"} onChange={this.changInfo} style={{}}>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'right',
                                marginTop: 70,
                                marginBottom: 20
                            }}>
                                <input type={"radio"} value={"0קצת יותר עלינו"} className={"radioOption"}
                                       defaultChecked={"true"} name={"info"}/>
                                <span className={"checkmark"}
                                      style={{marginRight: 18, color: '#6e6e6e'}}>קצת יותר עלינו</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'right',
                                marginTop: 20,
                                marginBottom: 20
                            }}>
                                <input type={"radio"} name={"info"} value={"1על המערכת"} className={"radioOption"}/>
                                <span className={"checkmark"}
                                      style={{marginRight: 18, color: '#6e6e6e'}}>על המערכת</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'right',
                                marginTop: 20,
                                marginBottom: 70
                            }}>
                                <input type={"radio"} name={"info"} value={"2למי אנחנו מתאימים?"}
                                       className={"radioOption"}/>
                                <span className="checkmark"
                                      style={{marginRight: 18, color: '#6e6e6e'}}>למי אנחנו מתאימים?</span>

                            </div>
                        </form>


                    </div>

                </div>
            </div>
                <div style={{height: 0,background:'white' }}/>
                <ContactPage/></>
        );
    }
}

export default AboutPage;