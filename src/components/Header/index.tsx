import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='col-12 py-3 border-bottom mb-3'>
            <Link to='/' title='Home'>Home</Link>
            <Link to='/product/12345' title='Product'>product</Link>
        </header>
    );
};

export default Header;