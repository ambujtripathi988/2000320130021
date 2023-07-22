import React, { useState, useEffect } from 'react';
import TrainItem from './TrainItem';

const TrainSchedule = () => {
  const [trainSchedules, setTrainSchedules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://20.244.56.144/train/register');
        const data = await response.json();
        setTrainSchedules(data);
      } catch (error) {
        console.error('Error fetching train schedules:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="train-schedule">
      <h1>Train Schedules</h1>
      {trainSchedules.map((train) => (
        <TrainItem key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainSchedule;
