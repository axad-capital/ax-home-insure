import React from 'react';
import './navComp.css';
import { Link, useLocation } from 'react-router-dom';

const NavComp = () => {

    const location = useLocation()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'>Ax Home Insurance</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about-us' className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/what-is-home-insurance' className={location.pathname === '/what-is-home-insurance' ? 'nav-link active' : 'nav-link'}>What Is Home Insurance?</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavComp