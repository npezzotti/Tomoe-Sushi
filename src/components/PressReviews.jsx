import React from 'react'

export default function PressReviews(){
    return(
        <div className="press-reviews">
            <h1>Press</h1>
            <img style={{width: "45%", height: "25%"}} src={"/images/infatuation.png"} alt="infatuation" />
            <p>
                "Waiting in a line outside of any restaurant seems 
                a bit silly to us, but Tomoe is arguably one of the best."
            </p>
            <img style={{width: "25%", height: "25%"}} src={"/images/time-out-logo-png-1.png"} alt="time-out" />
            <p>
                "The consistent freshness of the sushi and the range of the
                a la carte menu has earned Tomoe an unimpeachable reputation."
            </p>
            <img style={{width: "25%", height: "25%"}} src={"/images/Thrillist.png"} alt="thrillist" />
            <p>
                "Despite its no-frills environment, diners queue up daily to 
                get their hands on Tomoe's delicious rawness."
            </p>
        </div>
    )
}