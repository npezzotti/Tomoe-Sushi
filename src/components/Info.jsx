// react
import React from 'react';

// components
import Map from './Map';

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
const buildWeekdayContainer = (weekday, openCloseMsg1, openCloseMsg2, todayBool) => {
    return (
        <div className={`weekday-container ${weekday} ${todayBool && 'today'}`}>
            <div className="title">{weekday}</div>
            <div className="open-close-container">
                {openCloseMsg1}
                {openCloseMsg2}
            </div>
        </div>
    )
}

const buildDtStr = (open1, close1, open2, close2) => {
    const getHourStr = (hour) => {
        if (hour > 12) {
            return `${hour - 12}:00 pm`
        } else if (hour === 0) {
            return `12:00 am`
        } else {
            return `${hour}:00 am`
        }
    }
    let open1Str = `${getHourStr(open1.getHours())}`
    let close1Str = `${getHourStr(close1.getHours())}`
    let dtStr1 = `Open from ${open1Str} to ${close1Str}`
    let dtStr2 = ``;
    if (open2 && close2) {
        let open2Str = `${getHourStr(open2.getHours())}`
        let close2Str = `${getHourStr(close2.getHours())}`
        dtStr2 = ` and ${open2Str} to ${close2Str}`
    }
    return dtStr1 + dtStr2
}
export default function Info({dt}){
    const {setTimeDiff} = dt
    let timeObj = setTimeObj();
    const getTimeDelta = (referenceTime) => {
        return buildDtStr(referenceTime.open1, referenceTime.close1, referenceTime.open2, referenceTime.close2)
    }

    // interval for timer
    setInterval(()=>{
        setTimeDiff(getTimeDelta(timeObj[new Date().getDay()]));
    }, 2500)
    const buildHourStr = (hour, minute) => {
        let amPm = 'AM'
        if (hour > 12) {hour = hour - 12; amPm = 'PM'}
        else if (hour === 0) {hour = 12}
        if (minute < 10) {minute = `0${minute}`}
        return `${hour}:${minute} ${amPm}`
    }
    const makeWeekElem = (timeObj) => {
        let weekElem;
        let now = new Date()
        let today = now.getDay()
        let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        weekElem = daysOfTheWeek.map((weekday, idx) => {
            let todayBool = today === idx;

            // get the 1st open and close times
            let openCloseMsg1;
            let openTime1 = timeObj[idx]['open1'].getHours();
            let closeTime1 = timeObj[idx]['close1'].getHours();
            let currentWindow = false;
            let refTime = timeObj[today]
            if ((timeObj[idx]['open1'])) {
                currentWindow = (now > refTime.open1 && now < refTime.close1 && todayBool)
                openCloseMsg1 = <div className={`open-close ${currentWindow && 'now'}`}>{`${buildHourStr(openTime1, 0)} - ${buildHourStr(closeTime1, 0)}`}</div>
            } else {
                openCloseMsg1 = `Closed`;
            }

            // get the 2nd open and close times
            let openCloseMsg2;
            if (!!(timeObj[idx]['open2'])) {
                currentWindow = (now > refTime.open2 && now < refTime.close2 && todayBool)
                let openTime2 = timeObj[idx]['open2'].getHours();
                let closeTime2 = timeObj[idx]['close2'].getHours();
                openCloseMsg2 = <div className={`open-close ${currentWindow && 'now'}`}>{`${buildHourStr(openTime2, 0)} - ${buildHourStr(closeTime2, 0)}`}</div>
            }
            if (['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(weekday) && todayBool) {
                return buildWeekdayContainer('Tues. - Sat.', openCloseMsg1, openCloseMsg2, todayBool)
            } else if (["Sunday", 'Monday'].includes(weekday)) {
                return buildWeekdayContainer(weekday, openCloseMsg1, openCloseMsg2, todayBool)
            }
            return <></>
        })
        return weekElem
    }
    return(
        <div className="info" id='info'>
            <div className="info-title">Info</div>
            <div className="info-content">
                <div className="location">
                    <div className="location-map">
                        <Map />                        
                    </div>
                </div>
                <div className="info-right">
                    <div className="address">
                        <div className='pre'>Located at:</div>
                        <div className="street">172 Thompson St</div>
                        <div className="city-state">New York, NY 10012</div>
                    </div>
                    <div className="week-schedule">
                        {makeWeekElem(timeObj)}
                    </div>
                </div>
            </div>
        </div>
    )
}