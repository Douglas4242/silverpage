import React from 'react'
import './showcasemarkers.css'
import data_product from '../assets/data'
import Item from '../item/Item'
import { Link } from 'react-router-dom'

const ShowcaseMarkers = () => {
    return (
        <div className='sp__showcasemarkers section__margin'>
            <h1>MARCADORES MAIS POPULARES</h1>
            <hr />
            <div className="sp__showcasemarkers-item">

                {data_product.map((item, i) => (
                    <Link to={item.category}>
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            digital_price={item.digital_price}
                            print_price={item.print_price} />
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default ShowcaseMarkers
