import React from 'react';
import {LargeScreen, SmallScreen} from "./ScreenSizes";

const ScreenButton = ({text}) => {
    return (
        <div>
            <LargeScreen>
                <button className={"roundButton"} >{text}</button>
            </LargeScreen>
            <SmallScreen>
                <button className={"roundButton"}>+</button>
            </SmallScreen>
        </div>
    );
};

export default ScreenButton;