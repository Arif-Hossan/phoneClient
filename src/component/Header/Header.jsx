// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to ='/'>Home</Link>
            <Link to ='/phones'>Phones</Link>
        </div>
    );
};

export default Header;