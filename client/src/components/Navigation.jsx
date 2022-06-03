import { Link } from 'react-router-dom';

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="nav-style">
            <div className="nav-container">
                <Link to="/home" className="brand-name">Starter</Link>
                <Link to='/login' className="nav-button">Login</Link>
                <Link to='/signup' className="nav-button">Signup</Link>
            </div>
            
        </nav>
    )
}

export default Navigation;