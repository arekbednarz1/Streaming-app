import React from 'react';
import {Link} from "react-router-dom";

const Header =()=>{
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamers
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Stream
                </Link>
            </div>
        </div>
    );
};
export default Header;
