import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburguesa from '../../../assets/menu-de-hamburguesas.png';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="nav">
            <h2 className='minombre'>Gema Millán</h2>
            <label htmlFor="menu" onClick={toggleMenu}><img src={hamburguesa} alt="hamburguesa" width={"50px"} /></label>
            <input type="checkbox" id="menu" checked={menuOpen} readOnly />
            <ul className={menuOpen ? "menu-open" : ""} onClick={closeMenu}>
                <li><Link className="letrasnav" to='/'>Home</Link></li>
                <li><Link className="letrasnav" to='/technologies'>Tecnologías</Link></li>
                <li><Link className="letrasnav" to='/about'>Sobre mí</Link></li>
                <li><Link className="letrasnav" to='/hobbies'>Aficiones</Link></li>
                <li><Link className="letrasnav" to='/contact'>Contacto</Link></li>
            </ul>
        </nav>
    );
};


export default Nav;
