import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to='/' title='Home'>Home</Link>
            <Link to='/product/12345' title='Product'>product</Link>
        </header>
    );
};

export default Header;