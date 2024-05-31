import React, { useContext } from 'react'
import './shopcategory.css'
import { ShopContext } from '../context/ShopCpntext'
import Item from '../components/item/Item'
import data_product from '../components/assets/all_product'



const ShopCategory = ({ category }) => {

    const { all_product } = useContext(ShopContext);

    return (
        <div className='sp__shopcategory section__padding'>
            <div className="sp__shopcategory-itens">
                {data_product.map((item, i) => {
                    if (category === "markers") {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                digital_price={item.digital_price}
                                print_price={item.print_price}
                            />
                        )
                    } else if (item.category === category) {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                digital_price={item.digital_price}
                                print_price={item.print_price}
                            />
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    );

}

export default ShopCategory
