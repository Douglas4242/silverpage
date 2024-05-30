import React from 'react'
import './showcaseplanners.css'
import data_product_planner from '../assets/data-showcase-planner'
import ItemPlanner from '../itemplanner/ItemPlanner'

const ShowcasePlanners = () => {
    return (
        <div className='sp__showcaseplanner'>
            <h1>CONFIRA NOSSOS PLANNERS</h1>
            <hr />
            <div className="sp__showcaseplanner-item">
                {data_product_planner.map((item, i) => (
                    <ItemPlanner
                        key={i}
                        id={item.id}
                        name={item.name}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        image4={item.image4}
                        digital_price={item.digital_price}
                        print_price={item.print_price} />
                ))}
            </div>
        </div>
    )
}

export default ShowcasePlanners
