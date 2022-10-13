import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';

export default function NotFound() {
    return (
        <div className="center">
            <h4>Oops! Sorry but this page doesn't seem to exist. <Link to="/" className='link'>Come back home!</Link></h4>
        </div>
    )
}
