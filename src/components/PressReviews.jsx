import React from 'react'

export default function PressReviews(){
    return(
        <div className="press-reviews" style={{display: "grid"}}>
            <h1 style={{color: "white"}}>Press</h1>
            <div>
                <img style={{width: "45%", height: "25%", marginRight: "500px"}} src={"/images/infatuation.png"} alt="infatuation" />
                <p style={{marginLeft: "500px", color: "white"}}>
                    "Waiting in a line outside of any restaurant seems 
                    a bit silly to us, but Tomoe is arguably one of the best."
                </p>
            </div>
            <div>
                <img style={{width: "25%", height: "25%", marginRight: "500px"}} src={"/images/time-out-logo-png-1.png"} alt="time-out" />
                <p style={{marginLeft: "500px", color: "white"}}>
                    "The consistent freshness of the sushi and the range of the
                    a la carte menu has earned Tomoe an unimpeachable reputation."
                </p>
            </div>
            <div>
                <img style={{width: "25%", height: "25%", marginRight: "500px"}} src={"/images/Thrillist.png"} alt="thrillist" />
                <p style={{marginLeft: "500px", color: "white"}}>
                    "Despite its no-frills environment, diners queue up daily to 
                    get their hands on Tomoe's delicious rawness."
                </p>
            </div>
        </div>
    )
}