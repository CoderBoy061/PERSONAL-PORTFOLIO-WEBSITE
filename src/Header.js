import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="heading">
                <p className="heading_text">I Am Debabrata</p>
                <div className="header_option">
                    <p className="header_link"><NavLink style={{ textDecoration: 'none', color:'white' }} to="/">HOME</NavLink></p>
                    <p className="header_link"><NavLink style={{ textDecoration: 'none', color:'white' }} to="/resume">VIEW RESUME</NavLink></p>
                    <p className="header_link"><NavLink style={{ textDecoration: 'none',color:'white' }} to="/contact">CONTACT WITH ME</NavLink></p>
                </div>

            </div>
            
        </div>
    )
}

export default Header;
