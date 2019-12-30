import React from 'react';
import {withRouter} from "react-router-dom";
import ImgWithLoader from "../Common/ImgWithLoader";

const HeaderUnit = ({product, dark, history, productsSelector}) => {
    return (
        <div style={{
            height: 200,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer'
        }} onClick={() => {
            history.push('/products#' + product.url);
            productsSelector(false);
        }}>
            <span style={{
                color: dark ? 'black' : 'white',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>{product.text}</span>
            <ImgWithLoader
                style={{flex: 1, overflow: 'hidden', width: 130, objectFit: 'contain', padding: 10}}
                alt={''} src={'/images/' + (dark ? product.blackImage : product.whiteImage)}/>
            <img style={{display: 'none'}} src={'/images/' + product.blackImage} alt={''}/>
        </div>
    );
};

export default withRouter(HeaderUnit);