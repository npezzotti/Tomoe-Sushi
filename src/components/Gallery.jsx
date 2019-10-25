import React, {useState} from 'react';
import axios from 'axios';

export default function Gallery(){
    const [foodImgArr, setFoodImgArr] = useState([])
    const getImages = () => {
        try{
            let query = `https://api.instagram.com/#tomoesushi/images`;
            let request = axios.get(query)
            let imagesArr = request.data
            setFoodImgArr([...imagesArr])
        } catch (err) {console.log(err)}
    }
    return(
        <div className="gallery">
            {foodImgArr.map((imgUrl, idx)=>{
                return <img className="food-img" key={`food-${idx}`} src={imgUrl} alt='' />
            })}
        </div>
    )
}