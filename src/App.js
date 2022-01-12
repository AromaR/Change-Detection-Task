import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'

function App() {

  const [start, setStart] = useState(false);
  const [participantID, setParticipantID] = useState("");
  
  return (
    <div className="quiz">
      { start ? <Quiz props={setParticipantID}/> : <Start props={setStart} />} 
    </div>
  );
}

export default App;
