import React, {Component} from 'react';
import './PopUpVideo.css'

class PopUpVideo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div id={"PopUpVideo"}>

                <div id={'movie_div'}
                     style={{
                         alignItems: 'center',
                         justifyContent: 'center',
                         marginTop: '0%',
                         width: '100%',
                         height: '100%',
                         paddingTop: 0,
                         position: 'relative',
                         paddingLeft: 5,
                         paddingRight: 5,
                         objectFit: 'contain'


                     }}>
                    <div className="container2">
                        <a href="/" className={'round-button'} id={'exit-button'} onClick={e => {
                            e.preventDefault();
                            this.props.closeThePop();
                        }}>
                            X</a>
                        <iframe title={'IGH Product Introduction'}
                                className={"contain movie_frame"} style={{}}
                                allowFullScreen="allowfullscreen"
                                src="https://www.youtube.com/embed/w-2Khs6ftNc?autoplay=1"
                                frameBorder={0}
                                allow='autoplay'

                        >
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopUpVideo;