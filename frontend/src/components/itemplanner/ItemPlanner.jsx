import React from 'react'
import './itemplanner.css'

const ItemPlanner = ({ image1, image2, image3, image4, name, digital_price, print_price }) => {
    return (
        <div className='sp__itemplanner'>
            <div className="sp__itemplanner-imagebig">
                <img src={image1} />
            </div>
            <div className="sp__itemplanner-imagesmall">
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
            </div>
            <p>{name}</p>
            <div className='sp__itemplanner-price'>
                <div className='sp__itemplanner-price_digital'>
                    <p> Digital: R$ {digital_price}</p>
                </div>
                {/* <div className='sp__itemplanner-price_printed'>
                    <p>Impressa: R${print_price}</p>
                </div> */}
            </div>
        </div>
    )
}

export default ItemPlanner
