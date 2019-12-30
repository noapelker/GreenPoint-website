import React from 'react';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const InfoPanel = ({image, title, text, even, marginTop}) => {
    return (
        <div>
            <SmallScreen>
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    width: '100%',
                    paddingLeft: '10%',
                    textAlign: 'justify',
                    paddingRight: '10%',
                }}>
                    <h4 style={{textAlign: 'center'}}>{title}</h4>
                    {text.split('\n').map((item, index) => (index === 0 ?
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: even ? 'row' : 'row-reverse',
                            width: '100%',
                            alignItems: 'flex-end'
                        }}>
                            <p style={{flex: 1, alignSelf: 'flex-end'}}>{item}</p>
                            {text && text.length > 0 &&
                            <ImgWithLoader src={'/images/' + image} alt={''} style={{
                                width: '40%',
                                objectFit: 'scale-down',
                                alignSelf: 'flex-start'
                            }}/>
                            }

                        </div>
                        : <p
                            style={{width: '100%'}}
                            key={index}>{item}</p>))}
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    marginTop: 70,
                    textAlign: 'justify',
                    flexDirection: even ? 'row' : 'row-reverse'
                }}>
                    <ImgWithLoader src={'/images/' + image} alt={''} style={{
                        width: '40%',
                        marginTop: marginTop === undefined ? 100 : marginTop,
                        objectFit: 'scale-down',
                        alignSelf: 'flex-start'
                    }}/>
                    <div style={{flex: 1, marginRight: 10}}>
                        <h4 style={{textAlign: 'right'}}>{title}</h4>
                        {text.split('\n').map((item, index) => <p
                            style={{width: '100%'}} key={index}>{item}</p>)}
                    </div>
                </div>
            </LargeScreen>
        </div>
    );
};

export default InfoPanel;