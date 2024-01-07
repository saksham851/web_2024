import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl,filterData} from "./data";
import { toast } from "react-toastify";
const App = () => {
  const [courses,setCourses]=useState([])
  useEffect(()=>
  {
      const fetchData=async()=>{
         try{
            const res=await fetch(apiUrl);
            const output=await res.json();
            //save data intoa variable
            setCourses(output.data)
          
         }catch{
             toast.error(`something went wrong`)
         }
      }
    fetchData();
  },[])
  return(
  <div>
   <Navbar/>
   <Filter filterData={filterData}/>
   <Cards courses={courses}/>
  </div>
  );
};

export default App;
