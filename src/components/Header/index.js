import { NavLink } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className="container header">
            <nav>
                <ul className="nav-items">
                    <li>
                        <NavLink to="/"  className="nav-item">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/characters" className="nav-item">Characters</NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
        </div>
    )
};

export default Header;