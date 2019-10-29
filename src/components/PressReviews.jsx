import React from 'react'

export default function PressReviews(){
    
    return(
        <div className="press-reviews" id='press'>
            <h1 className="press-title" style={{color: "white", textAlign: "center"}}>Press</h1>
            <div className="gridContainer">
                <div className="infatuation fullReview">
                    <p className="infatuationP review">
                        "Waiting in a line outside of any restaurant seems 
                        a bit silly to us, but Tomoe is arguably one of the best."
                    </p>
                    <img className="infatuationImg" src={"/cropped_images/infatuation.png"} alt="infatuation" />
                </div>
                
                <div className="timeOut fullReview">
                    <p className="timeOutP review">
                        "The consistent freshness of the sushi and the range of the
                        a la carte menu has earned Tomoe an unimpeachable reputation."
                    </p>
                    <img className="timeOutImg img" src={"/cropped_images/time-out-logo-png-1.png"} alt="time-out" />
                </div>
                
                <div className="thrillist fullReview">
                    <p className="thrillistP review">
                        "Despite its no-frills environment, diners queue up daily to 
                        get their hands on Tomoe's delicious rawness."
                    </p>
                    <img className="thrillistImg img" src={"/cropped_images/Thrillist.png"} alt="thrillist" />
                </div>
            </div>
        </div>
    )
}