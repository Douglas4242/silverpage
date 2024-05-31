import React, { useState } from 'react'
import './navbar.css'
import { RiAlignJustify, RiCloseLine, RiHeart3Line, RiInstagramLine } from 'react-icons/ri'
import logo from '../assets/Logo2.png'
import { Link } from 'react-router-dom'

const navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [indicator, setIndicator] = useState("Start")

    const Menu = () => (
        <>
            <p onClick={() => (setIndicator("Start"))}><Link to='/'>Início</Link>{indicator === "Start" ? <hr /> : <></>}</p>
            <p onClick={() => (setIndicator("Markers"))}><Link to="/markers">Marcadores</Link>{indicator === "Markers" ? <hr /> : <></>}</p>
            <p onClick={() => (setIndicator("Planners"))}><Link to="/planners">Planners</Link>{indicator === "Planners" ? <hr /> : <></>}</p>
            <p onClick={() => (setIndicator("About"))}><Link to="https://www.instagram.com/silv.erpage?igsh=MWQ0eHZpNmJncWRwbw==">Instagram <RiInstagramLine /></Link> {indicator === "About" ? <hr /> : <></>}</p>
        </>
    )

    return (
        <div className='sp__navbar section__padding' >
            <div className='sp__navbar-links'>
                <div className='sp__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='sp__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='sp__navbar-menu'>
                {toggleMenu
                    ? (< RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} />)
                    : (<RiAlignJustify color='#000' size={27} onClick={() => setToggleMenu(true)} />)
                }
                {toggleMenu && (
                    <div className='sp__navbar-menu_container fade-in'>
                        <div className="sp__navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
            <div className='sp__navbar-sign'>
                <Link to="/login"><button type='button'>Entrar</button></Link>
                <Link to="/favorites"><p><RiHeart3Line color='#000' size={36} /></p></Link>
            </div>
        </div>
    )
}

export default navbar
