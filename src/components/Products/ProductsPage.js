import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './productNEW.css';
import {withRouter} from "react-router-dom";
import '../Common/common.css';
import './products.css';
import ScreenButton from "../Common/ScreenButton";
import ContactPage from "../Common/ContactPage";

class ProductsPage extends Component {
    scrollCorrectly = (hash, animated) => {
        const behavior = animated ? 'smooth' : undefined;
        if (!hash || hash.length === 0) {
            try {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior
                });
            } catch {
                window.scroll(0, 0);
            }

        } else {
            if (hash.length > 0) {
                let top = document.getElementById(hash.substring(1));
                if (top) {
                    top = top.offsetTop;

                    try {
                        window.scroll({
                            top: top - 40,
                            left: 0,
                            behavior
                        });
                    } catch {
                        window.scroll(0, top - 40);
                    }

                }
            }
        }
    };

    componentDidMount() {
        this.scrollCorrectly(this.props.location.hash, false);
    }

    componentDidUpdate(prevProps, prevState, _) {
        if (prevProps.shrinked === this.props.shrinked)
            this.scrollCorrectly(this.props.location.hash, true);

    }


    render() {
        return (
            <>
            <div style={{
                width: '100%',
                backgroundImage: 'url(/images/BackNew.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                zIndex: 1


            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingTop: '100px',
                    flexDirection: 'column',
                    direction: 'rtl',
                    justifyContent: 'space-between'
                }}>
                    <img alt={''} src={'images/NEWLOGOGREEN2.png'} style={{

                        alignSelf: 'center',
                        height: '100px',
                        opacity: '0.5'


                    }}/>
                    <p className={"titlePicFirst"}>
                        אנחנו שמחים להציג בפניכם את סדרת המוצרים של גרין פוינט. </p>
                    <div className={"textPicFirst"}>
                        <div>
                            סדרה איכותית בעלת עיצוב ייחודי למתן מראה חזק, חדשני ויוקרתי.

                        </div>

                    </div>
                    <div className={'rowStart'}>

                        <img className={'ImageHoldI'} src={'/images/NEWIrIghc.png'} alt={''}/>
                        <img className={'ImageHoldS'} src={'/images/NEWKeypad.png'} alt={''}/>
                        <img className={'ImageHold'} src={'/images/NEWSensor.png'} alt={''}/>
                        <img className={'ImageHoldS'} src={'/images/NEWSwitches2.png'} alt={''}/>

                        <img className={'ImageHold'} src={'/images/NEWSwitch.png'} alt={''}/>


                    </div>

                    <div className={"PicContainerRow"} style={{
                        marginTop: '30px',
                        backgroundColor: 'rgba(255,255,255,0.6)',


                    }}
                    >
                        <img className={'ItemsSwitch'} src={'/images/NEWSwitch.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            paddingBottom: 20
                        }}>
                            <p className={"titlePic"}>מפסקי המגע</p>
                            <div className={"textPic"}>קו עיצוב יוקרתי של מפסקי מגע מזכוכית קריסטלית
                                מחוסמת למתן מראה חדשני ויוקרתי.
                            </div>

                            <div className={"textPic"}>
                                למפסקי המגע מזכוכית אפשר להצמיד בצורה מאוד פשוטה סמלים בהתאם למטרת
                                המפסק.
                            </div>
                            <div className={"textPic"}>
                                מפסקי המגע מגיעים בגדלים שונים ממפסק אחד עד קבוצה של שישה מפסקים.
                            </div>

                        </div>


                    </div>

                    <div className={"PicContainerRowR"} style={{}}
                    >
                        <img className={'Items'} src={'/images/NEWSensor.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            paddingBottom: 20

                        }}>
                            <p className={"titlePic"}>החיישן החכם</p>
                            <div className={"textPic"}>החיישן החכם מזהה תנועה, מודד את כמות האור ואת
                                הטמפרטורה בחדר.
                            </div>
                            <div className={"textPic"}>
                                לאחר שהחיישן אוסף את המידע, שולח אותו למפסקים החכמים המקבלים החלטות
                                בצורה עצמאית
                            </div>
                            <div className={"textPic"}>
                                בהתאם למצב הנוכחי למצב הרצוי של המשתמש.
                            </div>

                        </div>
                        <a href={"/docs/sensor_manual.pdf"}  style={{alignSelf:'center'}}>

                            <ScreenButton text={' מדריך הפעלה לחיישן'}  />
                        </a>

                    </div>
                    <div className={"PicContainerCol"} style={{
                        backgroundColor: 'rgba(255,255,255,0.5)',

                    }}
                    >
                        <a href={"/docs/smart_switch.pdf"}  style={{alignSelf:'center'}}>
                            <ScreenButton text={'המדריך להפעלת המפסק'}  />
                        </a>
                        <div className={"switches"} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <img className={'ItemsSmall'} src={'/images/NEWShutter.png'} alt={''}/>
                            <img className={'ItemsSmall'} src={'/images/NEWSense.png'} alt={''}/>
                            <img className={'ItemsSmall'} src={'/images/NEWPower.png'} alt={''}/>
                            <img className={'ItemsSmall'} src={'/images/NEWLight.png'} alt={''}/>
                        </div>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            paddingBottom: 20

                        }}>
                            <p className={"titlePic"}>המפסקים החכמים</p>
                            <div className={"textPic"}>מפסקים עצמאיים ואוטומטיים לשליטה ובקרה על
                                הפעלות החשמל כגון תאורה, תריסים,דוד, מזגן ועוד.
                                כל מפסק בעל יכולת למידה וקבלת החלטות באופן אוטומטי אשר הופכת אותו
                                לאוטונומי
                                לחלוטין ללא תלות בבקר מרכזי או רשת תקשורת.
                                ניתן לשנות את מצב המפסק בין אוטומטי וידני באופן שוטף לפי העדפותיכם

                            </div>


                        </div>


                    </div>
                    <div className={"PicContainerRow"} style={{}}
                    >
                        <img className={'ItemsI'} src={'/images/NEWIrIghc.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center'
                        }}>
                            <p className={"titlePic"}>מגשרי האינפרה אדום והאינטרנט</p>
                            <div className={"textPic"}>המגשרים מחברים בין מוצרי החשמל בבית למערכת
                                וכן בין יחידות מערכת הבית החכם לאינטרנט.
                            </div>
                            <div className={"textPic"}>
                                בכך, מאפשרים המגשרים שליטה מלאה על הבית באמצעות מוצרי IGH או שליטה
                                מרחוק באמצעות האפליקציה.
                            </div>

                        </div>
                        <div style={{ display:'flex',flexDirection:'column',alignSelf:'center'}}>
                        <a href={"/docs/ir_manual.pdf"} style={{alignSelf:'center'}}>

                            <ScreenButton text={'מדריך הפעלה למגשר האינפרה אדום'}  />

                        </a>
                        <a href={"/docs/ighc_manual.pdf"} style={{alignSelf:'center'}}>
                            <ScreenButton text={'מדריך הפעלה למגשר האינטרנט'}  />

                        </a>
                        </div>

                    </div>
                    <div className={"PicContainerCol"} style={{
                        backgroundColor: 'rgba(255,255,255,0.5)',


                    }}
                    >
                        <img className={'ItemsSmall2'} src={'/images/NEWKeypad.png'} alt={''}/>
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center'
                        }}>
                            <p className={"titlePic"}>לוח המקשים</p>
                            <p className={"textPic"}>לוח מגע אלחוטי המשמש להפעלת מכשירי החשמל בבית
                                בנוחות וקלות מכל מקום, ללא תלות ברשת WIFI.
                                בעזרת לוח המקשים ניתן להפעיל מספר פעולות בלחיצה אחת בלבד.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div style={{height: 0,background:'white' }}/>
        <ContactPage/></>
        );
    }
}

export default withRouter(ProductsPage);