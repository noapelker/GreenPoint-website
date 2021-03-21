import React, { Component } from 'react';
import '../Common/common.css';
import ContactPage from "../Common/ContactPage";

class AdvantagesPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <div style={ { width: '100%', display: 'flex', flexDirection: 'column' } }>
                    <div className={ 'page_top_root' }>
                        <img className={ 'page_top_img' } src={ '/images/Advantage.jpg' } alt={ '' }/>
                        <div className={ 'page_top_bg' }>
                        </div>

                    </div>

                    <span className={ 'page_top_text' }>אוטומטי, פשוט  ומתאים  <span
                        style={ { color: 'darkgreen' } }>לכולם.</span> </span>
                    <div style={ {
                        backgroundColor: 'white',
                        marginBottom: 80,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'

                    } }>
                        <div style={ { marginTop: 30 } } className={ "iconRowContainer" }>
                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>
                                    <img alt={ '' } src={ "/images/icon1.png" } className={ "iconsAdvantage" }/>
                                    <span className={ "AdvantageText" }>מבטלת לחלוטין את הצורך  <span
                                        className={ "boldAndGreen" }>ביחידת בקר מרכזית ורשת אלחוטית </span>ובכך מאפשרת שליטה ובקרה אוטומטית לחלוטין,  התקנה פשוטה אמינות ומחיר אטרקטיבי.
                        </span>
                                </div>
                            </div>
                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>

                                    <img alt={ '' } src={ "/images/icon2.png" } className={ "iconsAdvantage" }/>
                                    <span className={ "AdvantageText" }>הופכת את ביתכם  <span
                                        className={ "boldAndGreen" }>לחכם ואוטומטי </span>לחלוטין על פי שגרת היום יום שלכם ועל פי צרכים שתגדירו מראש.

                        </span>
                                </div>
                            </div>
                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>

                                    <img alt={ '' } src={ "/images/icon3.png" } className={ "iconsAdvantage" }/>
                                    <span className={ "AdvantageText" }>דואגת לעדכן אתכם על כל  <span
                                        className={ "boldAndGreen" }> המתרחש בביתכם </span>גם כשאתם לא נמצאים על ידי שליחת מיילים לטלפון הנייד לפי בחירתכם.

                        </span>
                                </div>
                            </div>
                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>

                                    <img alt={ '' } src={ "/images/icon4.png" } className={ "iconsAdvantage" }/>
                                    <span className={ "AdvantageText" }>מצמצמת משמעותית את <span
                                        className={ "boldAndGreen" }>צריכת החשמל</span> בביתכם על ידי ביטול צריכת חשמל מבוזבז תוך כדי שיפור איכות החיים.

                        </span>
                                </div>
                            </div>
                        </div>

                        <div className={ "iconRowContainer" }>

                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>
                                    <img alt={ '' } src={ "/images/icon5.png" } className={ "iconsAdvantage" }
                                    />
                                    <span className={ "AdvantageText" }>  <span className={ "boldAndGreen" }>מערכת מודולרית </span>המתאימה להתקנה בבתים שלמים או חלקים ממנו כאשר בכל עת ניתן לעשות שינויים ולהוסיף עוד חדרים.
                        </span>
                                </div>

                            </div>
                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>
                                    <img alt={ '' } src={ "/images/icon6.png" } className={ "iconsAdvantage" }/>
                                    <span className={ "AdvantageText" }>כוללת  <span className={ "boldAndGreen" }> אפליקציה חכמה </span>דרכה ניתן לשלוט בבית ולהיות בביקורת על צריכת החשמל היומית, שבועית ושנתית.

                        </span>
                                </div>
                            </div>
                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>

                                    <img alt={ '' } src={ "/images/icon7.png" } className={ "iconsAdvantage" }/>
                                    <span className={ "AdvantageText" }><span
                                        className={ "boldAndGreen" }>התקנה פשוטה </span> שיכולה להתבצע על ידי כל חשמלאי ללא צורך בתשתיות מיוחדות.

                                </span>
                                </div>
                            </div>
                            <div className={ "allIconContainer" }>
                            <span className={ "AdvantageTextTitle" }>
                            </span>
                                <div className={ "iconHolder" }>

                                    <img alt={ '' } src={ "/images/icon8.png" } className={ "iconsAdvantage" }/>
                                    <span className={ "AdvantageText" }> <span className={ "boldAndGreen" }>מתאימה לכל אחד. </span>
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
                </div>
                <div style={ { height: 0, background: 'white' } }/>
                <ContactPage/></>
        );
    }
}

export default AdvantagesPage;