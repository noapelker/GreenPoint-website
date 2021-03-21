import React, {Component} from 'react';
import HomeRouter from "../HomePage/HomeRouter";
import {withRouter} from "react-router-dom";
import './Header.css';
import {items} from "./TextBlocks";
import {LargeScreen, SmallScreen} from "../Common/ScreenSizes";
import Drawer from "@material-ui/core/Drawer/Drawer";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import HamburgerMenu from "./HamburgerMenu";
import MediaQuery from "react-responsive";
import ImgWithLoader from "../Common/ImgWithLoader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ContactWindow from "../ContactWindow/ContactWindow";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProducts: false,
            dark: false,
            drawerOpen: false,
            minimizeContact: false
        };
    }

    setMinimzeContact = () => {
        this.setState({minimizeContact: true});
    };

    showProducts = showProducts => {
        if (showProducts !== this.state.showProducts)
            this.setState({showProducts});
    };

    toggleDrawer = open => () => {
        this.setState({drawerOpen: open});
    };

    scrollToContacts = () => {
        const contactSection = document.getElementById('contactSection');
        if (contactSection) {
            try {
                window.scroll({
                    top: contactSection.offsetTop,
                    behavior: 'smooth'
                });
            } catch {
                window.scroll(0, contactSection.offsetTop);
            }
        }
    };
    render() {
        return (
            <div className={'header_main_root'} style={{pointerEvents: 'none'}}>
                <div style={{pointerEvents: 'all'}}
                     className={'header_root ' + (this.props.shrinked ? 'shrinked' : '')}>
                    <div className={'header_title'}>
                        <SmallScreen>
                            <IconButton style={{alignSelf: 'center'}}
                                        onClick={this.toggleDrawer(true)} color="inherit"
                                        aria-label="Menu">
                                <MenuIcon/>
                            </IconButton>
                            <Drawer open={this.state.drawerOpen} anchor={"right"}
                                    onClose={this.toggleDrawer(false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onKeyDown={this.toggleDrawer(false)}
                                >
                                    <HamburgerMenu closeDrawer={this.toggleDrawer(false)}
                                                   history={this.props.history}/>
                                </div>
                            </Drawer>
                            <div style={{flex: 1}}/>
                            {this.props.shrinked &&
                            <a href={'tel:046039090'} style={{
                                alignSelf: 'center',
                                marginLeft: 10,
                                fontSize: '1em',
                                color: 'darkgreen',
                                fontWeight: 'bold'
                            }}>
                                <span>04-6039090</span>
                            </a>
                            }
                            <a href={'tel:046039090'} style={{
                                alignSelf: 'center',
                                fontSize: '1.5em',
                                color: 'green'
                            }}>
                                <FontAwesomeIcon className={'icon'}
                                                 icon={'phone'}
                                />
                            </a>
                        </SmallScreen>
                        <ImgWithLoader src={'/images/Asset 6.svg'} className={'gp_logo'}
                                       alt={''}
                                       onClick={() => {
                                           this.props.history.push('/');
                                       }}/>
                        <LargeScreen>
                            <MediaQuery minWidth={this.props.shrinked ? 1000 : 1120}>
                                <FontAwesomeIcon onClick={this.scrollToContacts} className={'icon'}
                                                 style={{
                                                     alignSelf: 'center',
                                                     color: 'green'
                                                 }}
                                                 icon={'phone'}
                                />
                                <span style={{
                                    alignSelf: 'center',
                                    marginLeft: 10,
                                    color: 'green'
                                }}>04-6039090</span>
                            </MediaQuery>
                            <div style={{
                                flex: 1,
                            }}/>
                            <HomeRouter history={this.props.history} items={items}
                                        productsSelector={this.showProducts}/>
                        </LargeScreen>

                    </div>

                </div>
                <LargeScreen>
                    {!this.state.minimizeContact &&
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <FontAwesomeIcon style={{
                            color: 'black',
                            pointerEvents: 'all',
                            fontSize: '1.3em',
                            cursor: 'pointer'
                        }} icon={'minus-square'} onClick={() => {
                            this.setState({minimizeContact: true});
                        }}/>
                        <ContactWindow shrinked={this.props.shrinked} minimizeFunc={this.setMinimzeContact}/>
                    </div>}

                </LargeScreen>
            </div>
        );
    }
}

export default withRouter(Header);