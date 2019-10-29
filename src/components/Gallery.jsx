import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    largeDisplay : {
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 4,
        slidesToSlide: 4,
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 4,
        slidesToSlide: 4,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 3,
        slidesToSlide: 3,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        }, 
        items: 3,
        slidesToSlide: 3,
    },
}

const galleryImages = [
    "cropped_images/Gallery1.jpg",
    "cropped_images/Gallery2.jpg",
    "cropped_images/Gallery3.jpg",
    "cropped_images/Gallery4.jpg",
    "cropped_images/Gallery5.jpg",
    "cropped_images/Gallery6.jpg",
    "cropped_images/Gallery7.jpg",
    "cropped_images/Gallery8.jpg",
    "cropped_images/Gallery9.jpg",
    "cropped_images/Gallery10.jpg",
    "cropped_images/Gallery11.jpg",
    "cropped_images/Gallery12.jpg",
    "cropped_images/Gallery13.jpg",
    "cropped_images/Gallery14.jpg",
    "cropped_images/Gallery15.jpg",
    "cropped_images/Gallery16.jpg",
    "cropped_images/Gallery17.jpg",
    "cropped_images/Gallery18.jpg",
    "cropped_images/Gallery19.jpg",
    "cropped_images/Gallery20.jpg",
    "cropped_images/Gallery21.jpg",
    "cropped_images/Gallery22.jpg",
    "cropped_images/Gallery23.jpg",
    "cropped_images/Gallery24.jpg",
    "cropped_images/Gallery25.jpg",
    "cropped_images/Gallery26.jpg",
    "cropped_images/Gallery27.jpg"
]

export default function Gallery () {

    return (
        <div id="gallery">
            <h1 style={{color: "white", textAlign: "center"}}>Gallery</h1>
            <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={false}
                showDots={false}
                ssr={true}
                infinite={true}
                keyboardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                arrows={true}
                renderButtonGroupsOutside={true}
                itemClass="carousel-item-padding-40-px"
                additionalTransfrom={0}
            >

                {galleryImages.map((image, index) => (
                    <div key={index}><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px" }} src={image} alt='' /></div>
                ))}
            </Carousel>
        </div>
    )
}