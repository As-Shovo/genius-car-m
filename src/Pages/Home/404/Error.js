import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/404.png';

const Error = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default Error;