import React from 'react'
import './footer.css'
import logo from '../assets/Logo2.png'
import { RiInstagramLine } from "react-icons/ri"


const Footer = () => {
    return (
        <div className='sp__footer section__padding'>
            <div className="sp__footer-about">
                <h1>Como adquirir seu produto?</h1>
                <h2>Nos chame no <a href='https://www.instagram.com/silv_erpage?igsh=MXVvNXR2Mnd6NWpyeA==' target='_blank'>INSTAGRAM! <RiInstagramLine color='#000' size={35} /> </a></h2>
            </div>
            <div className="sp__footer-logo">
                <img src={logo} />
            </div>
            <div className="sp__footer-copyright">
                <p>Copyright © 2024 - Todos os Direitos Reservados</p>
            </div>

        </div>
    )
}

export default Footer
