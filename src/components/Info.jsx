import React, {useState} from 'react'

const setTimeObj = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDay();
    let date = now.getDate();
    let sunday = date-day;
    let openTimeObj = {
        0 :{
            open1:new Date(year,month,sunday,17,0,0,0), close1:new Date(year,month,sunday,22,0,0,0)
        },
        1 :{
            open1:new Date(year,month,sunday+1,17,0,0,0), close1:new Date(year,month,sunday+1,23,0,0,0)
        },
        2 :{
            open1:new Date(year,month,sunday+2,13,0,0,0), close1:new Date(year,month,sunday+2,15,0,0,0),
            open2:new Date(year,month,sunday+2,17,0,0,0), close2:new Date(year,month,sunday+2,23,0,0,0)
        },
        3 :{
            open1:new Date(year,month,sunday+3,13,0,0,0), close1:new Date(year,month,sunday+3,15,0,0,0),
            open2:new Date(year,month,sunday+3,17,0,0,0), close2:new Date(year,month,sunday+3,23,0,0,0)
        },
        4 :{
            open1:new Date(year,month,sunday+4,13,0,0,0), close1:new Date(year,month,sunday+4,15,0,0,0),
            open2:new Date(year,month,sunday+4,17,0,0,0), close2:new Date(year,month,sunday+4,23,0,0,0)},
        5 :{
            open1:new Date(year,month,sunday+5,13,0,0,0), close1:new Date(year,month,sunday+5,15,0,0,0),
            open2:new Date(year,month,sunday+5,17,0,0,0), close2:new Date(year,month,sunday+5,23,0,0,0)},
        6 :{
            open1:new Date(year,month,sunday+6,13,0,0,0), close1:new Date(year,month,sunday+6,15,0,0,0),
            open2:new Date(year,month,sunday+6,17,0,0,0), close2:new Date(year,month,sunday+6,23,0,0,0)
        },
    }
    return openTimeObj
}
let timeObj = setTimeObj();
// 172 Thompson St
// New York, NY 10012
const buildTimeMsg = (timeDiff) => {
    let hours = Math.floor(timeDiff / 60 / 60);
    let hourStr = hours > 1 ? `hours`:`hour`;
    let hoursMsg = timeDiff / 60 >= 60 ? `${hours} ${hourStr} and`:``;
    let minutes = Math.floor(timeDiff / 60);
    let minutesAdj = hours > 0 ? minutes - (hours * 60): minutes
    let minuteStr = minutesAdj > 1 ? `minutes`:`minute`;
    let minutesMsg = `${minutesAdj} ${minuteStr}`;
    let timeMsg = `${hoursMsg} ${minutesMsg}`
    return timeMsg
}
export default function Info(){
    const getTimeDelta = (referenceTime) => {
        let dt = new Date()
        let msg;
        let secTillOpen1 = (referenceTime.open1 - dt) / 1000
        let secTillClose1 = (referenceTime.close1 - dt) / 1000
        let secTillOpen2 = (referenceTime.open2 - dt) / 1000
        let secTillClose2 = (referenceTime.close2 - dt) / 1000

        if (dt < referenceTime.open1) {
            msg = `Opening in ${buildTimeMsg(secTillOpen1)}`
        } else if (dt > referenceTime.open1 && dt < referenceTime.close1) {
            msg = `Closing in ${buildTimeMsg(secTillClose1)}`
        } else if (dt < referenceTime.open2) {
            msg = `Opening in ${buildTimeMsg(secTillOpen2)}`
        } else if (dt > referenceTime.open2 && dt < referenceTime.close2) {
            msg = `Closing in ${buildTimeMsg(secTillClose2)}`
        } else {
            msg = `Closed for the night.`
        }
        return msg
    }

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

    // state
    let [currentTime, setCurrentTime] = useState(dateToStr(new Date()))

    // interval for timer
    setInterval(()=>{
        setCurrentTime(getTimeDelta(timeObj[new Date().getDay()]));
    }, 2500)

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