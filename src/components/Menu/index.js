import React from 'react';
import Logo from '../../assets/logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Web Flix Logo"></img>
            </Link>
            <ButtonLink className="ButtonLink" href="/cadastro/video">Novo vídeo</ButtonLink>
        </nav>
    )
}

export default Menu