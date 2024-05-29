import React, { useState } from 'react'
import './navbar.css'
import { RiAlignJustify, RiCloseLine } from 'react-icons/ri'
import logo from '../assets/Logo2.png'

const navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => (
        <>
            <p><a href='#home'>Início</a></p>
            <p><a href='#markers'>Marcadores</a></p>
            <p><a href='#planners'>Planners</a></p>
            <p><a href='#about'>Sobre Nós</a></p>
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
                <button type='button'>Entrar</button>
            </div>
        </div>
    )
}

export default navbar
