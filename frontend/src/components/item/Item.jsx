import React from 'react'
import './item.css'

const Item = ({ image, name, digital_price, print_price }) => {
    return (
        <div className='sp__item'>
            <img src={image} />
            <p>{name}</p>
            <div className='sp__item-price'>
                <div className='sp__item-price_digital'>
                    {/* <p>Digital: R${digital_price}</p> */}
                </div>
                <div className='sp__item-price_printed'>
                    {/* <p>Impressa: R${print_price}</p> */}
                </div>
            </div>
        </div>
    )
}

export default Item
