import React from 'react';
import Input from "../../Common/Input";
import { numberPattern, phoneNumberPattern } from "../pattern";
import HighLineFormLogic from "./HighLineFormLogic";

const HighLineForm = ({ onSubmit }) => {
    const {onClickSubmit,name,setName,email,setEmail,roomNumber,setRoomNumber,floor,setFloor,phone,setPhone}=HighLineFormLogic(onSubmit)
    return (
            <form onSubmit={ onClickSubmit }>
                <Input className={ "inputHighLine" } placeholder={ "שם ושם משפחה" } setValue={ setName }
                       value={ name } />
                <div className={ "apartmentHighLineContainer" }>
                    <Input className={ "inputHighLineHalf" } placeholder={ "מספר דירה" }
                           setValue={ setRoomNumber } value={ roomNumber } pattern={ numberPattern }/>
                    <Input className={ "inputHighLineHalf" } placeholder={ "מספר קומה" } setValue={ setFloor }
                           pattern={ numberPattern }
                           value={ floor }/>
                </div>
                <Input className={ "inputHighLine" } placeholder={ "כתובת דוא״ל" } setValue={ setEmail }
                       type={ "email" }
                       value={ email }/>
                <Input className={ "inputHighLine" } type={ "tel" } placeholder={ "מספר טלפון" }
                       setValue={ setPhone } pattern={ phoneNumberPattern }
                       value={ phone }/>
                <input type={ "submit" } value={ "שלח" } className={ "submitButtonHighLine" }/>
            </form>

    );
};

export default HighLineForm;