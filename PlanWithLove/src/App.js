import React from "react";
import data from './data'
import Tours from "./components/Tours";
import { useState } from "react";


const App = () => {
  const [tours,setTours] = useState(data);

  function removeTourHandler(id){
        //in this we have to remove city from actual data array from where it is coming
        //we will remove tour on basis of id 
        //function is made here bcoz data is here only
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return(
    <div className="app">
      <Tours tours={tours} removeTour={removeTourHandler}></Tours>
    </div>
  )
};

export default App;
