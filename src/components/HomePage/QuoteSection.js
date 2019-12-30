import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const quotes = [
    'היה לי ולמשפחתי מאוד קל להתרגל לטכנולוגיה הזאת!',
    'מנהל המיקום שפותח לי את החנייה כשאני מגיע כל כך נוח!',
    'שליטה בתאורות בשטחים הציבוריים שלנו חוסך לנו 30% בצריכת החשמל החודשית'
];

const QuoteSection = () => {
    const quote = quotes[Math.floor(Math.random() * 10) % 3];
    return (
        <div style={{
            width: '100%',
            height:'10%',
            background: 'white',
            paddingTop: 50,
            paddingBottom: 50,
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <div style={{
                width: '70%',
                height:'10%',
                margin: '0 auto', background: 'white',
               // border: '1px solid darkgrey',
               // boxShadow: '0 0 15px 1px rgba(0,0,0,0.5)',
                paddingTop: 20,
                paddingBottom: 20,

            }}>
                <FontAwesomeIcon style={{color: 'darkgreen'}} size={'2x'} className={'icon'}
                                 icon={'quote-right'}/>
                <p/>
                <span style={{color: '373737', fontSize: '1.2em'}}>{quote}</span>
            </div>
        </div>
    );
};

export default QuoteSection;