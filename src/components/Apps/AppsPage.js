import React, {Component} from 'react';
import '../Common/common.css';
import ImgWithLoader from "../Common/ImgWithLoader";
import ContactPage from "../Common/ContactPage";

class AppsPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
            <div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{
                        width: '100%',
                        marginTop: 70,
                        backgroundImage: 'url(/images/AppBack2.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        paddingTop: '4%',
                        paddingBottom: '5%',
                        paddingRight: '2%',
                        paddingLeft: '2%',
                        backgroundSize: 'cover',

                    }}>
                        <div className={"appContainer"} style={{
                            width: '100%',
                            display: 'flex',
                            height: 'fit-content'
                        }}>
                            <img alt={''} className={'appFront'} src={'/images/AppN.png'}/>

                            <div className={"appTitle"}>
                                <div className={"AppButtons"} style={{}}>
                                    <a style={{width: 170}}
                                       href={'https://itunes.apple.com/us/app/igh-compact/id895412247?mt=8'}>
                                        <ImgWithLoader src={'/images/appstore.png'} alt={''}
                                                       style={{height: '100%', width: '100%'}}/></a>
                                    <a style={{marginRight: 10, width: 170}}
                                       href={'https://play.google.com/store/apps/details?id=com.igh.ighcompact3&hl=en'}><ImgWithLoader
                                        src={'/images/googleplay.png'} alt={''}
                                        style={{height: '100%', width: '100%'}}/></a>
                                </div>
                                <span className={'page_top_textApp'}>מאפשרת שליטה ובקרה על הבית מכל
                                 מקום </span>
                                <span
                                    className={'page_top_textApp2'}>אפליקציה פשוטה ונוחה לשימוש </span>

                            </div>
                        </div>

                    </div>
                    <div className={"appIconHolder"}
                    >
                        <div className={"appIconRow"}
                        >
                            <div className={"AppIcon"}>
                                <img alt={''} className={'appIconImage'} src={'/images/appIcon4.png'}/>
                                <span className={'AppText'}>תאפשר לכם ליצור ולהפעיל תסריטי הפעלה שונים באמצעות הגדרה מראש של רצף פעולות בלחיצת כפתור באפליקציה.</span>


                            </div>
                            <div className={"AppIcon"}>

                                <img alt={''} className={'appIconImage'} src={'/images/appIcon1.png'}/>
                                <span className={'AppText'}>נותנת בקרה מלאה על תצרוכת החשמל באמצעות הצגת תצרוכת החשמל בזמן אמת ועלות הפעלת כל מכשיר.</span>

                            </div>
                            <div className={"AppIcon"}>

                                <img alt={''} className={'appIconImage'} src={'/images/appIcon2.png'}/>
                                <span className={'AppText'}>הפיכת הטלפון לשלט אוניברסלי כך שתוכל לשלוט על מכשירי החשמל בביתך מכל מקום מבלי לחפש אחר השלט המתאים.</span>

                            </div>
                            <div className={"AppIcon"}>
                                <img alt={''} className={'appIconImage'} src={'/images/appIcon3.png'}/>
                                <span className={'AppText'}>מעניקה שליטה ובקרה על הבית מכל מקום בכל זמן נתון.</span>


                            </div>


                        </div>

                    </div>
                    <a href={"/docs/app_he2.pdf"} style={{
                        alignSelf: 'center',
                        marginBottom: 50,
                        width: 150,
                        height: 40,
                        borderRadius: '30px',
                        border: '2px solid #646464'
                    }} rel="noopener noreferrer" target="_blank">
                        <div style={{
                            width: '100%',
                            textAlign: 'center',
                            paddingTop: 5,
                            color: '#646464',
                            fontSize: 20
                        }}>עוד
                        </div>
                    </a>
                </div>
            </div>
                <div style={{height: 0,background:'white' }}/>
                <ContactPage/></>
        );
    }
}

export default AppsPage;