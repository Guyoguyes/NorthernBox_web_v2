import React, {useState, useRef} from "react";
import './wave.css'

function NBCWave(){


    // The state for our timer
    // const [timer, setTimer] = useState('00:00:00');
    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    //
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    //
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = "2023",
        dayMonth = "01/01/",
        launchDate = dayMonth + yyyy;
    //
    today = mm + "/" + dd + "/" + yyyy;
    if (today > launchDate) {
        launchDate = dayMonth + nextYear;
    }
    const countDown = new Date(launchDate).getTime(),
        x = setInterval(function() {

        const now = new Date().getTime(),
            distance = countDown - now;


        setDays(Math.floor(distance / (day)))
        setHours(Math.floor((distance % (day)) / (hour)))
        setMinutes(Math.floor((distance % (hour)) / (minute)))
        setSeconds(Math.floor((distance % (minute)) / second))

    })




    return(
        <>
            <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6" style={{backgroundImage:'url(assets/images/bg/wave.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor:'#212121'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                                <h2 className="title" style={{fontSize: '72px'}}>NorthernBox WAVE</h2>
                                <ul className="page-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="current-page">Wave</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-wrapper">

                <div className="container1">
                    <h1 id="headline">Countdown to NBC WAVE Launch</h1>
                    <div id="countdown">
                        <ul>
                            <li className='timerlist'><span id="days">{days}</span>days</li>
                            <span>:</span>
                            <li className='timerlist'><span id="hours">{hours}</span>Hours</li>
                            <span>:</span>
                            <li className='timerlist'><span id="minutes">{minutes}</span>Minutes</li>
                            <span>:</span>
                            <li className='timerlist'><span id="seconds">{seconds}</span>Seconds</li>
                        </ul>
                    </div>

                </div>

            </main>

        </>
    )
}

export default NBCWave