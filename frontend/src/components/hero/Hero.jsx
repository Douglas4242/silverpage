import React from 'react'
import './hero.css'
import markersShowcase from '../assets/Markers_showcase.png'

const hero = () => {
    return (
        <div className='sp__hero section__padding'>
            <div className="sp__hero-left">
                <h2>SEJA BEM VINDO!</h2>
                <h3>CONHEÇA NOSSAS COLEÇÕES!</h3>
                <button type='button'>Útimas coleções</button>
            </div>
            <div className="sp__hero-right">
                <div className='sp__hero-right_text'>
                    <p>Marcadores de Páginas para todos os gostos</p>
                </div>
                <img src={markersShowcase} />

            </div>
        </div>
    )
}

export default hero
