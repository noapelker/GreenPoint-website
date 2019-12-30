import React from 'react';
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import ImgWithLoader from "../Common/ImgWithLoader";

const PanelComponent = ({title, text, image, even, whiteText, children, marginTop}) => {
    return (
        <div style={{
            width: '100%',
        }}>
            <SmallScreen>
                <div style={{
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingBottom: 30,
                    display: 'flex', flexDirection: 'column', width: '100%',
                    color: whiteText ? 'white' : 'black'
                }}>
                    <h4>{title}</h4>
                    {text.split('\n').map((item, index) => (index === 0 && image ?
                        <div key={index} style={{
                            display: 'flex', width: '100%',
                            flexDirection: even ? 'row' : 'row-reverse',
                            alignItems: 'center'

                        }}>
                            {image ?
                                <ImgWithLoader src={'/images/' + image} alt={''}
                                               style={{
                                                   width: '100%',
                                                   height: '100%',
                                                   objectFit: 'scale-down',
                                               }}/> :
                                <div style={{width: '45%'}}/>}

                            <p style={{alignSelf: 'center'}}>{item}</p>
                        </div> :
                        <p key={index}>{item}</p>)
                    )}
                    {children}
                </div>
            </SmallScreen>
            <LargeScreen>
                <div style={{
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    width: '100%',
                    alignItems: 'center'
                    , justifyContent: 'space-between',

                    height: '90vh',
                    display: 'flex',

                    flexDirection: even ? 'row' : 'row-reverse',
                }}>
                    <ImgWithLoader src={'/images/' + image} alt={''}
                                   style={{
                                       marginTop: marginTop === undefined ? 0 : marginTop,
                                       width: '24vw',
                                       height: '50vw',
                                   }}/>
                    <div style={{
                        height: 'fit-content',
                        padding: 20,
                        marginLeft: 10, marginRight: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        color: whiteText ? 'white' : 'black'
                    }}>
                        <h4>{title}</h4>
                        {text.split('\n').map((item, index) => <p
                            key={index}>{item}</p>
                        )}
                        {children}
                    </div>
                </div>
            </LargeScreen>
        </div>
    );
};

export default PanelComponent;