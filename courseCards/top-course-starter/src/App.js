import React from "react";
import Navbar  from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"
import {apiUrl,filterData} from "./data";
import {useEffect,useState} from "react";
import {toast} from 'react-toastify'
import Spinner from "./components/Spinner";

function App(){

const [courses,setCourses] = useState(null);
const [loading, setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title); //this is done as we by default want it on all filter
 
    async function fetchData() {
      setLoading(true); //spinner dikha rhe
      try{
        let res = await  fetch(apiUrl);
        let output =await res.json();
        //save data in a variable
        // console.log(output);
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false); //spinner hta diya as data aa gya
    }
    

  useEffect( () => {
      fetchData();
  },[]); //this is for first render only the api call is made

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
          <Navbar/>
      </div>

      <div className="bg-bgDark2">
          <Filter filterData = {filterData}  category={category} setCategory={setCategory}/>
      </div>

      <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading == true ? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
        }
      </div>
     
    </div>

  );
}

export default App;
