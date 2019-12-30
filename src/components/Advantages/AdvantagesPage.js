import React, {Component} from 'react';
import '../Common/common.css';

class AdvantagesPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/Advantage.jpg'} alt={''}/>
                    <div className={'page_top_bg'}>
                    </div>

                </div>

                <span className={'page_top_text'}>אוטומטי, פשוט  ומתאים  <span style={{color:'darkgreen'}}>לכולם.</span> </span>
                <div style={{
                    backgroundColor: 'white',
                    marginBottom:80,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'

                }}>
                    <div style={{ marginTop:30}} className={"iconRowContainer"}>
                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>
                                <img alt={''} src={"/images/icon1.png"} className={"iconsAdvantage"}/>
                                <span className={"AdvantageText"}>מבטלת לחלוטין את הצורך  <span className={"boldAndGreen"}>ביחידת בקר מרכזית ורשת אלחוטית </span>ובכך מאפשרת שליטה ובקרה אוטומטית לחלוטין,  התקנה פשוטה אמינות ומחיר אטרקטיבי.
                        </span>
                            </div>
                        </div>
                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>

                                <img alt={''} src={"/images/icon2.png"} className={"iconsAdvantage"}/>
                                <span className={"AdvantageText"}>הופכת את ביתכם  <span className={"boldAndGreen"}>לחכם ואוטומטי </span>לחלוטין על פי שגרת היום יום שלכם ועל פי צרכים שתגדירו מראש.

                        </span>
                            </div>
                        </div >
                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>

                                <img alt={''} src={"/images/icon3.png"} className={"iconsAdvantage"}/>
                                <span className={"AdvantageText"}>דואגת לעדכן אתכם על כל  <span className={"boldAndGreen"}> המתרחש בביתכם </span>גם כשאתם לא נמצאים על ידי שליחת מיילים לטלפון הנייד לפי בחירתכם.

                        </span>
                            </div>
                        </div>
                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>

                                <img  alt={''} src={"/images/icon4.png"} className={"iconsAdvantage"}/>
                                <span className={"AdvantageText"}>מצמצמת משמעותית את <span className={"boldAndGreen"}>צריכת החשמל</span> בביתכם על ידי ביטול צריכת חשמל מבוזבז תוך כדי שיפור איכות החיים.

                        </span>
                            </div>
                        </div>
                    </div>

                    <div className={"iconRowContainer"}   >

                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>
                                <img alt={''} src={"/images/icon5.png"} className={"iconsAdvantage"}
                                />
                                <span className={"AdvantageText"}>  <span className={"boldAndGreen"}>מערכת מודולרית </span>המתאימה להתקנה בבתים שלמים או חלקים ממנו כאשר בכל עת ניתן לעשות שינויים ולהוסיף עוד חדרים.
                        </span>
                            </div>

                        </div>
                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>
                                <img alt={''} src={"/images/icon6.png"} className={"iconsAdvantage"}/>
                                <span className={"AdvantageText"}>כוללת  <span className={"boldAndGreen"}> אפליקציה חכמה </span>דרכה ניתן לשלוט בבית ולהיות בביקורת על צריכת החשמל היומית, שבועית ושנתית.

                        </span>
                            </div>
                        </div>
                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>

                                <img alt={''} src={"/images/icon7.png"} className={"iconsAdvantage"}/>
                                <span className={"AdvantageText"}><span className={"boldAndGreen"}>התקנה פשוטה </span> שיכולה להתבצע על ידי כל חשמלאי ללא צורך בתשתיות מיוחדות.

                                </span>
                            </div>
                        </div>
                        <div className={"allIconContainer"} >
                            <span className={"AdvantageTextTitle"}>
                            </span>
                            <div className={"iconHolder"}>

                                <img alt={''} src={"/images/icon8.png"} className={"iconsAdvantage"}/>
                                <span className={"AdvantageText"}> <span className={"boldAndGreen"}>מתאימה לכל אחד. </span>
מדירות או ווילות למשרדים, בניינים שלמים או אוזרים ציבוריים קיימים וחדשים.

                        </span>
                            </div>
                        </div>
                    </div>
                    <div style={
                        {
                            height: 0,
                            backgroundColor: 'white',

                            width: '100%'
                        }

                    }>
                    </div>
                </div>


                {/*<InfoPanel even={true} image={'app6_0.png'} title={'ללא מערכת עיבוד מרכזית'}
                           text={about3}/>
                <InfoPanel marginTop={30} even={false} text={holistic}
                           title={'פתרון רחב וכולל'}
                           image={'igh2_0.png'}/>
                <InfoPanel even={true} marginTop={30} text={automation} title={'אוטומציה'}
                           image={'auto3.png'}/>
                <InfoPanel marginTop={30} even={false} text={stayInTouch}
                           title={'דירה ששומרת קשר איתנו'}
                           image={'intouch_0.png'}/>*/}
                {/*<SmallScreen>
                    <div style={{
                        width: '100%',
                        paddingLeft: '20%',
                        paddingRight: '20%',
                    }}>
                        <h4 style={{textAlign: 'right'}}>התקנות</h4>
                        <ul>
                            {aboutInstall.map((item, index) =>
                                <li
                                    key={index}>{item}</li>)}
                        </ul>
                    </div>
                </SmallScreen>
                <LargeScreen>
                    <div style={{
                        width: '100%',
                        paddingLeft: '20%',
                        paddingRight: '20%',
                        marginTop: 80,
                        flexDirection: 'row-reverse',
                        display: 'flex'
                    }}>
                        <div style={{flex: 1}}>
                            <h4 style={{textAlign: 'right'}}>התקנות</h4>
                            <ul>
                                {aboutInstall.map((item, index) =>
                                    <li
                                        key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <ImgWithLoader src={'/images/building2.png'} alt={''} style={{
                            marginLeft: 10,
                            width: '40%',
                            objectFit: 'scale-down',
                            marginTop: 100,
                            alignSelf: 'flex-start'
                        }}/>
                    </div>
                </LargeScreen>
                <div style={{
                    width: '100%',
                    marginTop: 50,
                    paddingLeft: '20%',
                    paddingRight: '20%'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                    }}>
                        <span style={{fontSize: '2em', color: 'black', fontWeight: 'bold'}}>מאפיינים מיוחדים</span>
                        <ul className={'features_list_root'}>
                            {aboutFeatures.map((item, index) => <li
                                style={{color: 'black', textAlign: 'right'}}
                                key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <InfoPanel marginTop={30} even={false} text={modular}
                           title={'מודולריות'}
                           image={'quickinstall.png'}/>
                <InfoPanel marginTop={30} even={true} text={quickInstall}
                           title={'התקנה פשוטה ומהירה'}
                           image={'install.png'}/>*/}
                {/*
                <AppPanel />
*/}
                {/*
                <ReliableSystem />
*/}
            </div>
        );
    }
}

export default AdvantagesPage;