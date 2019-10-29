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
    "cropped_images/Gallery8.jpg"
]

export default function Gallery () {

    return (
        <div id="gallery">
            <h1 style={{color: "white"}}>Gallery</h1>
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
                <div key={index}><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={image} alt='' /></div>
            ))}
            </Carousel>
        </div>
    )
}