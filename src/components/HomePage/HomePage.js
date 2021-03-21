import React, { Component } from 'react';
import HomeInfo from "./HomeInfo";
import AboutSection from "./AboutSection";
import QuoteSection from "./QuoteSection";
import { withRouter } from "react-router-dom";
import './info_h4.css';
import PopUpVideo from "./PopUpVideo.js"
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ContactPage from "../Common/ContactPage";

const info = [
    {
        title: 'בית',
        text: 'המערכת הביתית החכמה של גרינפוינט יודעת לשלוט על תאורה, תריסים, מזגנים ועוד.\n',

        image: 'home_icon.svg',
        link: 'home'
    }, {
        title: 'משרד',
        text: 'מערכת המשרד החכם של גרינפוינט תהפוך את היום שלך להרבה יותר נעים ויעיל במשרד.',
        image: 'office_icon.svg',
        link: 'office'
    }, {
        title: 'מלון',
        text: 'המערכת המלונאית של גרינפוינט, תהפוך את השהייה במלון לנוחה ומרגיעה מהרגיל ותחסוך משמעותית את צריכת החשמל.\n',
        image: 'hotel_icon.svg',
        link: 'hotel'
    }
];

export function loadImage(url) {
    const r = (img, resolve) => () => {
        img.removeEventListener('load', r);
        img.removeEventListener('error', r);
        resolve()
    };

    return new Promise((resolve) => {
        const img = new Image();
        img.addEventListener('load', r(img, resolve));
        img.addEventListener('error', r(img, resolve));
        img.src = url;
    });
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            loadedImages: false,
            pushTheButton: false

        };
    }

    closeTheVideo = () => {
        this.setState({ pushTheButton: false })
        console.log(":ok");

    }
    pushTheButton = () => {
        this.setState({ pushTheButton: true })
    }
    imageLoaded = () => {
        this.setState({ loadedImages: true });
    };
    exitTheVideo = (target) => {
        if (target.target.name === undefined)
            this.setState({ pushTheButton: false })

    }

    componentDidMount() {
        loadImage('/images/NewHomePage.jpg').then(() => {
            this.imageLoaded();
        });
    }

    render() {
        return (
            <>
                <div style={ { width: '100%', textAlign: 'center' } } onClick={ this.exitTheVideo }>
                    { this.state.loadedImages ?
                        <div style={ {
                            width: '100%',
                            height: '100vh',
                            position: 'relative',

                        } }>

                            <img src={ '/images/NewHomePage2.jpg' } style={ {
                                objectFit: 'cover',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%'
                            } } alt={ '' }/>
                            <div style={ {
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: 'rgba(255,255,255,0.5)'
                            } }>
                                { !this.state.pushTheButton ? <div style={ {
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    } }>
                                        <img className={ 'contain' } src={ '/images/NewGlassSwitch.png' }
                                             alt={ '' }
                                             style={ {
                                                 width: 450,
                                                 maxWidth: '80%',
                                                 objectFit: 'contain'
                                             } }/> <a href="/" className={ 'round-button' }
                                                      onClick={ e => {
                                                          e.preventDefault();
                                                          this.pushTheButton();
                                                      } }>
                                        <img alt={ 'play' } src={ '/images/iconPlay.png' } style={ {
                                            width: 450,
                                            maxWidth: '80%',

                                            opacity: '0.8',
                                            objectFit: 'contain'
                                        } }/></a></div>
                                    : <div style={ {

                                        width: '100%',
                                        height: '100%',

                                        alignItems: 'center',
                                    } }>
                                        <PopUpVideo closeThePop={ this.closeTheVideo }/></div> }
                                <div style={ { height: 30 } }/>
                            </div>
                        </div> :
                        <div style={ {
                            width: '100%',
                            height: '70vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        } }>
                            <CircularProgress style={ { width: 80, height: 80 } }/>
                        </div> }


                    <div style={ {
                        marginTop: 20,
                        width: '100%'
                    } }>
                        <div style={ {
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            color: 'grey',
                            justifyContent: 'center'
                        } }>
                            { info.map((info, index) => <HomeInfo
                                history={ this.props.history }
                                info={ info } key={ index }/>) }
                        </div>
                        <AboutSection history={ this.props.history }/>
                        <QuoteSection/>
                    </div>
                </div>
                <div style={ { height: 0, background: 'white' } }/>
                <ContactPage/></>
        );
    }
}

export default withRouter(HomePage);