import React, { useContext } from 'react'
import './shopcategory.css'
import { ShopContext } from '../context/ShopCpntext'


const ShopCategory = ({ category }) => {

    const { all_product } = useContext(ShopContext)

    return (
        <div className='sp__shopcategory'>

        </div>
    )
}

export default ShopCategory
