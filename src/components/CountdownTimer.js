import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';
import {setShow1,setShowPause1} from './Quiz';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice" id="expired-notice">
      <span>Time Over!!! Click Next to Continue.</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds, ms }) => {
  return (
    <div className="show-counter">
        <h8>{minutes}:{seconds}</h8>
      
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds<= 0) {
    return <ExpiredNotice/>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
