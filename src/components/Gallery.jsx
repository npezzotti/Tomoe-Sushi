import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/**  @type {React.CSSProperties} */
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
    const [ index, setIndex ] = useState(0)
    return (
        <Carousel 
            responsive={responsive}
            swipeable={false}
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
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[0]} /></div>
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[1]} /></div>
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[2]} /></div>
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[3]} /></div>
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[4]} /></div>
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[5]} /></div>
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[6]} /></div>
            <div><img style={{ width: "75%", height: "75%", borderRadius: "50%", padding: "30px 0px 30px 0px" }} src={galleryImages[7]} /></div>
        </Carousel>
    )
}