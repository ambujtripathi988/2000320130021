import React from 'react';
import axios from 'axios';
import  {useState, useEffect } from "react";

const TrainItem = ({ train }) => {

   const [data, setData] = useState([]);

    useEffect(async () => {
      let url = 'http://20.244.56.144:80/train/trains';
      const res = await axios.get(url);
      console.log(res);
      setData(res)
     
  },{});
  return (
    <div className="train-item">
      This is a train item

    </div>
  );
};

export default TrainItem;
