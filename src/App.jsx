import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [currentTime,setCurrentTime] = useState(new Date());

  function formatZero(time){
    return time<10 ? `0${time}` : time;
  }

  function formatHour(hour){
    return hour === 0 ? 12 : hour > 12 ? hour-12 : hour;
  }

  function formatDate(date){
    const options = {month:"long",weekday:"long",day:"numeric",year:"numeric"}
    return date.toLocaleDateString(undefined,options);
  }

  useEffect(() => {
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);
    return () => clearInterval(timer)
  },[])

  return (
    <>
      <div className='digital-clock'>
        <h1>Digital Clock</h1>
        <div className='time'>
          {formatZero(formatHour(currentTime.getHours()))} :
          {formatZero(currentTime.getMinutes())} :
          {formatZero(currentTime.getSeconds())} 
          {currentTime.getHours()>12? " PM" : " AM"}
        </div>
        <div className='date'>{formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
