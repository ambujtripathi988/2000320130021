import React from 'react';
import axios from 'axios';

const TrainItem = ({ train }) => {

   const [data, setData] = useState([]);

    useEffect(() => {
      let url = 'http://20.244.56.144:80/train/trains';
      const res = axios.get(url);
      console.log(res);
      setData(res)
     
  });
  return (
    <div className="train-item">
      This is a train item
      // <p>Train Number: {train.trainNumber}</p>
      // <p>Departure Time: {train.departureTime}</p>
      // <p>Arrival Time: {train.arrivalTime}</p>
      // <p>Destination: {train.destination}</p>
    </div>
  );
};

export default TrainItem;
