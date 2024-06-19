import React, { useContext } from 'react'
import './shopcategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/Item'
import data_product from '../components/assets/all_product'
import Banner1 from '../components/assets/BannerMarker1.png'
import Banner2 from '../components/assets/BannerMarker2.png'
import Banner3 from '../components/assets/BannerMarker3.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ShopCategory = ({ category }) => {

    const { all_product } = useContext(ShopContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div>
            {category != "planners" ? (
                <div className="sp__shopcategory-banner">
                    <Slider {...settings}>
                        <div>
                            <img src={Banner1} alt="Banner 1" className="slider-image" />
                        </div>
                        <div>
                            <img src={Banner2} alt="Banner 2" className="slider-image" />
                        </div>
                        <div>
                            <img src={Banner3} alt="Banner 3" className="slider-image" />
                        </div>
                    </Slider>
                </div>

            ) : (
                <div>
                    oi
                </div>
            )}


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
        </div>
    );

}

export default ShopCategory
