import React from 'react';
import {privacy, data} from "./PrivacyText";
import ContactPage from "./Common/ContactPage";

const PrivacyPage = () => {
    return (
        <>
        <div style={{
            display: 'flex',
            direction: 'ltr',
            textAlign: 'left',
            flexDirection: 'column',
            marginTop: 70,
            padding: 40,
        }}>
            <h1 style={{alignSelf: 'center', textAlign: 'center'}}>Terms of Service</h1>

            {data.map((item, index) => <div key={index}>
                <h2 style={{alignSelf: 'center', textAlign: 'center'}}>{item.title}</h2>
                {item.text.split('\n').map((item) => <p>{item}</p>)}
            </div>)}

            <h2 style={{textAlign: 'center'}}>{privacy.title}</h2>
            <p>{privacy.text}</p>
            <ul>
                {privacy.items.map((item, index) => <li key={index}>
                    {item}
                </li>)}
            </ul>

        </div>
            <div style={{height: 0,background:'white' }}/>
            <ContactPage/></>
    );
};

export default PrivacyPage;