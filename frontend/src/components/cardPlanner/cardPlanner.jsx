import React, { useState, useCallback } from 'react';
import './cardPlanner.css';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';

const CardPlanner = ({ image1, image2, image3, image4, image5, name, price }) => {
    const [showGallery, setShowGallery] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(1);

    const passRight = useCallback(() => {
        setSelectedPhoto((prev) => (prev < 5 ? prev + 1 : 1));
    }, []);

    const passLeft = useCallback(() => {
        setSelectedPhoto((prev) => (prev > 1 ? prev - 1 : 5));
    }, []);

    const ToShow = useCallback(() => (
        <>
            <div className="sp__cardPlanner-gallery_photos">
                <button className="leftArrow" onClick={passLeft}><BsCaretLeftFill size={40} /></button>
                {selectedPhoto === 1 ? <div><img src={image1} alt="Photo 1" /></div> :
                    selectedPhoto === 2 ? <div><img src={image2} alt="Photo 2" /></div> :
                        selectedPhoto === 3 ? <div><img src={image3} alt="Photo 3" /></div> :
                            selectedPhoto === 4 ? <div><img src={image4} alt="Photo 4" /></div> :
                                <div><img src={image5} alt="Photo 5" /></div>}
                <button className="rightArrow" onClick={passRight}><BsCaretRightFill size={40} /></button>
            </div>
            <div className="sp__cardPlanner-gallery_thumbnails">
                <div onClick={() => setSelectedPhoto(1)}><img src={image1} alt="Thumbnail 1" /></div>
                <div onClick={() => setSelectedPhoto(2)}><img src={image2} alt="Thumbnail 2" /></div>
                <div onClick={() => setSelectedPhoto(3)}><img src={image3} alt="Thumbnail 3" /></div>
                <div onClick={() => setSelectedPhoto(4)}><img src={image4} alt="Thumbnail 4" /></div>
                <div onClick={() => setSelectedPhoto(5)}><img src={image5} alt="Thumbnail 5" /></div>
            </div>
        </>
    ), [selectedPhoto, passLeft, passRight, image1, image2, image3, image4, image5]);


    return (
        <div className='sp__cardPlanner'>
            <div className="sp__cardPlanner-main">
                <img onClick={() => setShowGallery(true)} src={image1} alt="Main" />
                <h2>{name}</h2>
                <h3>R$ {price}</h3>
            </div>
            {showGallery && (
                <div className="sp__cardPlanner-overlay fade-in" onClick={() => setShowGallery(false)}>
                    <div className="sp__cardPlanner-gallery" onClick={(e) => e.stopPropagation()}>
                        <ToShow />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardPlanner;
