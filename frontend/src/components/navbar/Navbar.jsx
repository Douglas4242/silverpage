import React, { useState } from 'react'
import './navbar.css'
import { RiAlignJustify, RiCloseLine, RiHeart3Line, RiInstagramLine } from 'react-icons/ri'
import logo from '../assets/Logo2.png'
import { Link } from 'react-router-dom'

const navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleMarkerMenu, setToggleMarkerMenu] = useState(false)
    const [indicator, setIndicator] = useState("Start")
    const [indicator2, setIndicator2] = useState("")

    const MarkerMenu = () => (
        <>
            <p onClick={() => (setIndicator2("motivacionais"))}> <Link to="/motivacionais">Motivacionais {indicator2 === "motivacionais" ? <hr /> : <></>} </Link> </p>
            <p onClick={() => (setIndicator2("animais"))}> <Link to="/animais">Animais {indicator2 === "animais" ? <hr /> : <></>}</Link> </p>
            <p onClick={() => (setIndicator2("livros"))}> <Link to="/livros">Livros {indicator2 === "livros" ? <hr /> : <></>}</Link> </p>
            <p onClick={() => (setIndicator2("religiosos"))}> <Link to="/religiosos">Religiosos {indicator2 === "religiosos" ? <hr /> : <></>}</Link> </p>
            <p onClick={() => (setIndicator2("diversos"))}> <Link to="/diversos">Diversos {indicator2 === "diversos" ? <hr /> : <></>}</Link> </p>
            <p onClick={() => (setIndicator2("personalizados"))}> <Link to="/personalizados">Personalizados {indicator2 === "personalizados" ? <hr /> : <></>}</Link> </p>
        </>
    )

    const Menu = () => (
        <>
            <p onClick={() => (setIndicator("Start"))(setIndicator2(""))}><Link to='/'>Início</Link>{indicator === "Start" ? <hr /> : <></>}</p>
            <p onMouseLeave={() => (setToggleMarkerMenu(false))} onMouseEnter={() => (setToggleMarkerMenu(true))} onClick={() => (setIndicator("Markers"))}><Link to="/markers">    {toggleMarkerMenu ? <><p>Marcadores</p> <MarkerMenu /></> : <><p>Marcadores</p> {indicator === "Markers" ? <hr /> : <></>}  </>} </Link></p>
            <p onClick={() => (setIndicator("Planners"))(setIndicator2(""))}><Link to="/planners">Planners</Link>{indicator === "Planners" ? <hr /> : <></>}</p>
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
