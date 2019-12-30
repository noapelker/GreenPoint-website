import React from 'react';
import {items} from "./TextBlocks";

const linkClicked = (location, history, selector) => () => {
    if (location === '/contact') {
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
    } else {
        if (history.location.pathname === location && location !== '/products') {
            try {
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                });
            } catch {
                window.scroll(0, 0);
            }
        }
        else
            history.push(location);
    }
    selector();
};

const HamburgerMenu = ({history, closeDrawer}) => {
    return (
        <div className={'drawer_root'}>
            <ul className={'drawer_list'}>
                {items.map((item, index) => (item.location === '/products' ?
                    <ul key={index} className={'drawer_list sub'}>
                        <li onClick={linkClicked('/products', history, closeDrawer)}
                            className={'drawer_item'}>מוצרים
                        </li>
                    </ul>
                    : <li
                        onClick={linkClicked(item.location, history, closeDrawer)}
                        className={'drawer_item'} key={index}>
                        {item.label}
                    </li>))}
            </ul>
        </div>
    );
};

export default HamburgerMenu;