import React from 'react';
import './trainSchedule.css';
import TrainSchedule from './components/TrainSchedule';
import TrainItem from './components/TrainItem';

function App() {
  return (
    <div className="App">
      <TrainSchedule />
       <TrainItem />
    </div>
  );
}

export default App;
