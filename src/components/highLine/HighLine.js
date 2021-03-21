import React from 'react';
import HighLineLogic from "./HighLineLogic";
import "./highline.css"
import HighLineForm from "./highLineForm/HighLineForm";
import Image from "../Common/Image";
import { highLine } from "./TextBlock"

const HighLine = () => {
    const { onSubmit ,doneMessage} = HighLineLogic();
    return (
        <div className={ "highLineContainer" }>
            <div className={ "formContainerHighLine" }>
                <div className={ "headerHighLineParent" }>
                    <div className={ "headerHighLineContainer" }>
                        <Image src={ "highline.svg" } className={ "logoHighLine" }/>
                        <span className={ "headerTextHighLine" }>{ highLine.title }</span>
                    </div>
                    <span className={ "headerSubTextHighLine" }>{ highLine.gift }</span>
                </div>
                <div className={ "formContainerParentHighLine" }>
                    <span className={ "highLineFormText" }>{doneMessage|| highLine.fill }</span>
                    { doneMessage?
                        <Image className={"doneMessageImage"} src={doneMessage===highLine.errorMessage?"errorMessage.svg":"submitMessage.svg"}/>:
                        <HighLineForm onSubmit={ onSubmit }/> }
                </div>
                <div className={"highLineMessage"}>
                    <span className={"doneMessageHighLine"}>{doneMessage}</span>

                </div>
            </div>
        </div>
    );
};

export default HighLine;