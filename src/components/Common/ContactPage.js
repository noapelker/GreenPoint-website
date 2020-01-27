import React, {useState} from 'react';
import {useInput} from "./Hooks";
import MatButton from "./MatButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RefreshIndicator from "./RefreshIndicator";
import {LargeScreen, SmallScreen} from "./ScreenSizes";
import './contact.css';

const ContactPage = () => {

    const phoneRegex = /.*[a-zA-Z].*/;

    const name = useInput('שם');
    const email = useInput('דוא״ל');
    const phoneNumber = useInput('מספר טלפון*');
    const city = useInput('עיר*');
    const message = useInput('הודעה');

    const [messageSent, setMessageSent] = useState(0);

    const validate = () => {
        if (phoneRegex.test(phoneNumber.value) || city.value.length === 0 || phoneNumber.value.length === 0)
            return true;
        return undefined;
    };

    const sendMail = () => {
        if (messageSent === 0) {
            setMessageSent(1);
            fetch(
                'https://gpleadsdb.herokuapp.com/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        phone: phoneNumber.value,
                        message: message.value,
                        city: city.value
                    })
                }
            ).then(() => {
                setMessageSent(2);
            }).catch(() => {
                setMessageSent(3);
            });
        }
    };
    const val = validate();

    return (
        <div id={'contactSection'} style={{
            background: '#3a3a3a',
            padding: '40px 0',
            boxSizing: 'unset',
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center',color:'white'}}>צור קשר</span>
            <div className={'contact_root'}>
                <div style={{
                    flex: 1,
                    fontSize: '1.4em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    lineHeight: 2,
                    color:'white',
                    textAlign: 'left'
                }}>
                    <span style={{fontWeight: 'bold'}}>גרינפוינט מערכות בע״מ</span>
                    <span style={{textAlign: 'center'}}>האשל 7 אזור התעשייה הדרומי קיסריה</span>
                    <a href={'mailto:info@greenpointsys.com'} style={{
                        color:'white',
                    }}>info@greenpointsys.com</a>

                    <div style={{display: 'flex'}}>
                        <span style={{fontSize: '1.5em', marginLeft: 10}}>04-6039090</span>
                        <FontAwesomeIcon className={'icon'} icon={'phone'}
                                         style={{alignSelf: 'center',
                                             color: 'green',
                                         }}/>
                    </div>
                </div>
                <LargeScreen>
                    <div style={{width: 10}}/>
                </LargeScreen>
                <div className={'contact_form_parent'}>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        visibility: messageSent < 2 ? 'unset' : 'hidden'
                    }}>
                        <LargeScreen>
                            <div style={{display: 'flex', marginTop: 10, width: '100%'}}>
                                <input {...name} style={{width: '50%'}} type={'email'}/>
                                <input {...city} style={{width: '50%', marginRight: 10}}
                                       type={'tel'}/>
                            </div>
                            <div style={{display: 'flex', marginTop: 10, width: '100%'}}>
                                <input {...email} style={{width: '50%'}} type={'email'}/>
                                <input {...phoneNumber} style={{width: '50%', marginRight: 10}}
                                       type={'tel'}/>
                            </div>
                        </LargeScreen>
                        <SmallScreen>
                            <input {...name} style={{width: '100%', marginTop: 10}} type={'email'}/>
                            <input {...city} style={{width: '100%', marginTop: 10}}
                                   type={'tel'}/>
                            <input {...email} style={{width: '100%', marginTop: 10}} type={'email'}/>
                            <input {...phoneNumber} style={{width: '100%', marginTop: 10}}
                                   type={'tel'}/>
                        </SmallScreen>

                        <textarea {...message}
                                  style={{width: '100%', marginTop: 10, resize: 'vertical'}}/>
                        <SmallScreen>
                            <MatButton disabled={val} onClick={sendMail}
                                       backgroundColor={val ? '#3a3a3a' : 'default'} style={{
                                width: 300,
                                borderRadius: 20,
                                alignSelf: 'flex-end',
                                border:'4px solid white',

                                fontSize: '1.5em'
                            }}>
                            <span style={{textAlign: 'center',marginRight:15}}>
                                {messageSent === 0 ? 'שלח' : 'שולח...'}
                            </span>
                                {messageSent === 0 ?
                                    <FontAwesomeIcon className={'icon'} icon={'paper-plane'} size={'2x'}
                                                     style={{color: 'white', marginRight:10}}/>
                                    :
                                    <RefreshIndicator size={30} style={{marginLeft: 10, marginRight: 10}}/>
                                }

                            </MatButton>
                        </SmallScreen>
                        <LargeScreen>
                            <MatButton disabled={val} onClick={sendMail}
                                       backgroundColor={val ? '#464646' : 'default'} style={{
                                width: 150,
                                borderRadius: 20,
                                border:'4px solid white',
                                alignSelf: 'flex-end',
                                marginTop:20
                            }}>
                            <span style={{textAlign: 'center',textDirection:'rtl',marginRight:10}}>
                                {messageSent === 0 ? 'שלח' : 'שולח...'}
                            </span>
                                {messageSent === 0 ?
                                    <FontAwesomeIcon className={'icon'} icon={'paper-plane'} size={'2x'}
                                                     style={{color: 'white', marginRight: 15}}/>
                                    :
                                    <RefreshIndicator size={20} style={{marginLeft: 5, marginRight:15}}/>
                                }

                            </MatButton>
                        </LargeScreen>
                    </form>
                    {messageSent >= 2 &&
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h4>{messageSent === 2 ? 'הודעתך נשלחה' : 'הודעתך לא נשלחה'}</h4>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactPage;