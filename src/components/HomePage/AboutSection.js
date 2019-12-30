import React from 'react';
import './AboutSection.css';

const AboutSection = () => {

    return (
        <div style={{width: '100%', textAlign: 'center'}}>

            <div className={"aboutHolder"} style={{
                width: '100%',
                backgroundImage: 'url(/images/BackgroundAbout.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',

            }}>
                <div style={{
                    position: 'relative',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0)'
                }}>
                <span id={"title"} style={
                    {
                        width: '100%',
                        textAlign: 'center',
                        fontFamily: 'Assistant Light',
                        color: '#393939'

                    }
                }>תהליך הפיכת הבית לבית <span style={
                    {

                        color: 'darkgreen'

                    }
                }>חכם</span> </span>

                    <div style={
                        {
                            flex: 1
                        }
                    }>

                    </div>
                    <div style={
                        {
                            position: 'relative',
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            direction: 'rtl',

                        }}>

                        <div className={"imageHolder"}>

                            <div className={"box"}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    textAlign: 'center',
                                }}>
                                    <img alt={''} src={"images/NEWAboutIcon1.png"}
                                         className={"imageLogo"}/>
                                    <span className={"titleAboutSec"}>ייעוץ</span>
                                </div>
                                <span className={"textAbout"}>תחילה יש ליצור קשר עם אחד מאנשי המכירות שלנו.
בשיחה, תקבלו הסבר רחב יותר על המערכת, פירוט על האפשרויות העומדות בפניכם ובסיומה הצעת מחיר.

</span>

                            </div>

                            <div className={"box"}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    textAlign: 'center'
                                }}>
                                    <img alt={''} src={"images/NEWAboutIcon2.png"}
                                         className={"imageLogo"}/>
                                    <span className={"titleAboutSec"}>התקנה</span>
                                </div>
                                <span className={"textAbout"}>התקנה והטמעת המערכת תיעשה על ידי מתקינים מקצועיים מטעם החברה.
זמן ההתקנה לבית ממוצע לוקח כשלוש שעות אך משתנה בין בית לבית לפי גודל הבית וסוג ההזמנה.

</span>

                            </div>

                            <div className={"box"}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    textAlign: 'center'
                                }}>
                                    <img alt={''} src={"images/NEWAboutIcon3.png"}
                                         className={"imageLogo"}/>
                                    <span className={"titleAboutSec"}>סיום</span>
                                </div>
                                <span className={"textAbout"}>בשלב זה, אנחנו מזמינים אתכם להישאר בבית, לנוח וליהנות מהבית החכם שלכם.
כמובן שבכל עת אנחנו פה בשבילכם כך שתמשיכו ליהנות מהבית החדש שלכם.
</span>

                            </div>

                        </div>
                        {/*<div className={"imageHolder"}>

                        <img src={'/images/NEWSensorIR.png'} className={"ProductImage"} id={"senseIR"} />
                        <img src={'/images/NEWcrisSwitche.png'} className={"ProductImage"} id={"crisSwi"} />
                        <img src={'/images/NEWswitches.png'} className={"ProductImage"} id={"switches"} />
                    </div>*/}

                        {/*<img src={'/images/NewHomePage.jpg'}style={{*/}
                        {/*height:'100%',*/}
                        {/*width: '25%',*/}

                        {/*}} />*/}
                        {/*<img src={'/images/NewHomePage.jpg'}style={{*/}
                        {/*height:'100%',*/}
                        {/*width: '25%',*/}
                        {/*}} />*/}
                        {/*<img src={'/images/NewHomePage.jpg'} style={{*/}
                        {/*height:'100%',*/}
                        {/*width: '25%',*/}

                        {/*}} />*/}
                        {/*<iframe title={'IGH Product Introduction'} style={{*/}
                        {/*position: 'absolute', top: '10%', bottom: 0,*/}
                        {/*width: '50%', height: '80%', left: '25%'*/}
                        {/*}}*/}
                        {/*allowFullScreen="allowfullscreen"*/}
                        {/*src="https://www.youtube.com/embed/w-2Khs6ftNc">*/}
                        {/*</iframe>*/}
                    </div>
                </div>
            </div>
            {/*  <div style={{
                width: '100%',
                paddingTop: 20,
                paddingBottom: 20,
                boxSizing: 'unset',
                background: 'rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'

            }}>

                <div className={'about_section_root'}>
                    {about1.split('\n').map((item, index) => <span
                        style={{textAlign: 'rtl'}}
                        key={index}>{item}</span>)}
                    <MatButton type={'secondary'}
                               onClick={() => {
                                   history.push('/about');
                               }}
                               backgroundColor={'rgba(255,255,255,0)'} style={{
                        marginTop: 30,
                        width: '5%',
                        height: '5%',
                        minWidth: 50,
                        minHeight: 10,
                        borderRadius: '100%',
                        border:'2px solid rgba(0,0,0,0.6)',


                    }}>
                        <span style={{
                            alignSelf: 'flex-start',
                            fontSize: '1em',
                            color: 'rgba(0,0,0,0.8)',

                        }}>קרא עוד</span>

                    </MatButton>
                </div>

            </div>*/}

        </div>
    );
};

export default AboutSection;