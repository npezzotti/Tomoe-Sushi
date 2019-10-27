import React, {useState} from 'react';

export default function Gallery(){
    const [foodImgArr, setFoodImgArr] = useState([])
    
    return(
        <div className="gallery">
            {foodImgArr.map((imgUrl, idx)=>{
                return <img className="food-img" key={`food-${idx}`} src={imgUrl} alt='' />
            })}
        </div>
    )
}