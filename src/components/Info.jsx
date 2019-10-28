import React, {useState} from 'react'

export default function Info(){
    const dateToStr = (dt) => {
        let hours = dt.getHours();
        let minutes = dt.getMinutes();
        let seconds = dt.getSeconds();

        hours   = hours === 0  ? 12           : hours;
        hours   = hours   > 12 ? hours - 12   : hours;
        minutes = minutes < 10 ? `0${minutes}`: minutes;
        seconds = seconds < 10 ? `0${seconds}`: seconds;
        let dtStr = `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getYear() + 1900} ${hours}:${minutes}:${seconds}`
        return dtStr
    }
    let [currentTime, setCurrentTime] = useState(dateToStr(new Date()))
    setInterval(()=>{
        // let dt = 
        setCurrentTime(dateToStr(new Date()));
    }, 250)
    return(
        <div className="info" id='info'>
            <div className="info-title">Info</div>
            <div className="weekly-times">
                <div className="weekday monday">Monday</div>
                <div className="weekday tuesday">Tuesday</div>
                <div className="weekday wednesday">Wednesday</div>
                <div className="weekday thursday">Thursday</div>
                <div className="weekday friday">Friday</div>
                <div className="weekday saturday">Saturday</div>
                <div className="weekday sunday">Sunday</div>
            </div>
            <div className="current-time">{currentTime}</div>
        </div>
    )
}