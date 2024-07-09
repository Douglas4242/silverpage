import React, { useContext } from 'react'
import './shopcategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/Item'
import CardPlanner from '../components/cardPlanner/cardPlanner'
import data_product from '../components/assets/all_product'
import Banner1 from '../components/assets/BannerMarker1.png'
import Banner2 from '../components/assets/BannerMarker2.png'
import Banner3 from '../components/assets/BannerMarker3.png'


import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from "keen-slider/react"



const ShopCategory = ({ category }) => {

    const { all_product } = useContext(ShopContext);



    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div>
            {category != "planners" ? (
                <div className="sp__shopcategory-banner">
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide"><img src={Banner1} /></div>
                        <div className="keen-slider__slide"><img src={Banner2} /></div>
                        <div className="keen-slider__slide"><img src={Banner3} /></div>
                    </div>
                </div>

            ) : (
                <div>

                </div>
            )}



            <div className='sp__shopcategory section__padding'>
                <div className="sp__shopcategory-itens_markers">
                    {data_product.map((item, i) => {
                        if (category === "markers" && item.category !== "planner") {
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
                {category !== "planners" ? ("") : (
                    <div className="sp__showcasemarkers-item_planner">
                        {data_product.map((item, i) => {
                            if (item.category === "planner") {
                                return (
                                    <CardPlanner
                                        key={i}
                                        id={item.id}
                                        name={item.name}
                                        image1={item.image1}
                                        image2={item.image2}
                                        image3={item.image3}
                                        image4={item.image4}
                                        image5={item.image5}
                                        price={item.price}
                                    />
                                )
                            }
                            return null;
                        })}
                    </div>
                )}

            </div>
        </div>
    );

}

export default ShopCategory
