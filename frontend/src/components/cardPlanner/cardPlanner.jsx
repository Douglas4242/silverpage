import React from 'react'
import './cardPlanner.css'
import { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const cardPlanner = ({ image1, image2, image3, image4, image5, name, price }) => {

    function ThumbnailPlugin(mainRef) {
        return (slider) => {
            function removeActive() {
                slider.slides.forEach((slide) => {
                    slide.classList.remove("active")
                })
            }
            function addActive(idx) {
                slider.slides[idx].classList.add("active")
            }

            function addClickEvents() {
                slider.slides.forEach((slide, idx) => {
                    slide.addEventListener("click", () => {
                        if (mainRef.current) mainRef.current.moveToIdx(idx)
                    })
                })
            }

            slider.on("created", () => {
                if (!mainRef.current) return
                addActive(slider.track.details.rel)
                addClickEvents()
                mainRef.current.on("animationStarted", (main) => {
                    removeActive()
                    const next = main.animator.targetIdx || 0
                    addActive(main.track.absToRel(next))
                    slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
                })
            })
        }
    }


    const [showGallery, setShowGallery] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 5,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )


    const ToShow = () => (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img src={image1} /></div>
                <div className="keen-slider__slide number-slide2"><img src={image2} /></div>
                <div className="keen-slider__slide number-slide3"><img src={image3} /></div>
                <div className="keen-slider__slide number-slide4"><img src={image4} /></div>
                <div className="keen-slider__slide number-slide5"><img src={image5} /></div>
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
                <div className="keen-slider__slide number-slide1"><img src={image1} /></div>
                <div className="keen-slider__slide number-slide2"><img src={image2} /></div>
                <div className="keen-slider__slide number-slide3"><img src={image3} /></div>
                <div className="keen-slider__slide number-slide4"><img src={image4} /></div>
                <div className="keen-slider__slide number-slide5"><img src={image5} /></div>
            </div>
        </>
    )

    return (
        <div className='sp__cardPlanner'>
            <>
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1"><img src={image1} /></div>
                    <div className="keen-slider__slide number-slide2"><img src={image2} /></div>
                    <div className="keen-slider__slide number-slide3"><img src={image3} /></div>
                    <div className="keen-slider__slide number-slide4"><img src={image4} /></div>
                    <div className="keen-slider__slide number-slide5"><img src={image5} /></div>
                </div>

                <div ref={thumbnailRef} className="keen-slider thumbnail">
                    <div className="keen-slider__slide number-slide1"><img src={image1} /></div>
                    <div className="keen-slider__slide number-slide2"><img src={image2} /></div>
                    <div className="keen-slider__slide number-slide3"><img src={image3} /></div>
                    <div className="keen-slider__slide number-slide4"><img src={image4} /></div>
                    <div className="keen-slider__slide number-slide5"><img src={image5} /></div>
                </div>
            </>
            {/* <div className="sp__cardPlanner-main">
                <img onClick={() => setShowGallery(true)} src={image1} />
            </div> */}
            {/* <div className="sp__cardPlanner-gallery">
                {showGallery &&
                    <ToShow />
                }
            </div> */}
        </div>
    )
}

export default cardPlanner
