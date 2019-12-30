import React, {Component} from 'react';
import Clock from "./Clock";
import ClockList, {getTime} from "./ClockList";
import {items} from "./TextBlocks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MatButton from "../Common/MatButton";
import './homepage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        const d = new Date();
        this.state = {
            hours: d.getHours(),
            mins: d.getMinutes(),
            secs: d.getSeconds(),
            currentText: '',
            index: -1
        };
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            const d = new Date();
            this.setState({
                hours: d.getHours(),
                mins: d.getMinutes(),
                secs: d.getSeconds()
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    itemClicked = index => {
        if (index > 7)
            index = 0;
        clearInterval(this.timerId);
        this.setState({
            index,
            currentText: items[index].text,
            hours: items[index].hour,
            mins: items[index].min,
            secs: items[index].hour * 60
        });
    };

    render() {
        return (
           <div className={"officeContainer"} style={{
               width: '100%',
               top:0,
               left:0,
                   right:0,
               height:'fit-content',
               bottom:0,
               backgroundImage: 'url(/images/HomePage.jpg)',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover',


           }}>
               <div className={"officeContainer"} style={{
                   width: '100%',
                   top:0,
                   left:0,
                   height:'fit-content',
                    paddingBottom:'5%',
                   right:0,
                   bottom:0,
                   backgroundColor:'rgba(255,255,255,0.8)',

               }}>
                   <p className={"OfficeTitle"}> <span>בית חכם  </span> <span style={{color:'darkgreen'}}>וירוק </span></p>

                   <div className={'home_root_container'}>
                    <Clock hours={this.state.hours} mins={this.state.mins} secs={this.state.secs}/>
                    <div style={{display: 'flex', width: '100%', flex: 1, overflow: 'auto', marginTop: 10}}>
                        <FontAwesomeIcon onClick={() => {
                            this.itemClicked(this.state.index + 1);
                        }} style={{
                            transition: '0.5s',
                            visibility: this.state.index === -1 ? 'hidden' : 'unset',
                            height: 40,
                            marginLeft: 0,
                            marginRight: 10,
                            marginTop: this.state.index <= 0 ? 0 : this.state.index * 40,
                            width: 30,
                        }} className={'icon'}
                                         icon={this.state.index === 7 ? 'arrow-circle-up' : 'arrow-circle-down'}
                        />
                        <ClockList activeItem={this.state.index} items={items}
                                   textChanged={this.itemClicked}/>
                        <div style={{flex: 1, marginRight: 10}}>
                            {this.state.currentText.length === 0 ? <MatButton onClick={() => {
                                    this.itemClicked(0);
                                }} backgroundColor={'default'}>התחל את היום</MatButton> :
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <span className={'h4'} style={{alignSelf: 'center'}}>{getTime(this.state.hours, this.state.mins)}</span>
                                    {this.state.currentText.split('\n').map((item, index) =>
                                        <p key={index}>{item}</p>)}
                                </div>
                            }
                        </div>
                    </div>

                </div>
               </div>
           </div>        );
    }
}

export default HomePage;