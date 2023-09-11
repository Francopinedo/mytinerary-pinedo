import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_cities = createAsyncThunk("cities/getCities", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/cities");
    const cities = response.data; 
    
    return {
      cities: cities
    };
  } catch (error) {
    console.log(error.message);
    throw error; 
  }
});
 


 const filter_cities_id = createAsyncThunk('filter_cities_id',async (id)=>{
   try {
    const city = await (axios.get("http://localhost:3000/api/city/itinerary/"+id))
     .then((response) => response.data)
return{
  city:city
}
   } catch (error) {
     console.log(e.message)
   }
 })

const citiesActions = {
   get_cities,filter_cities_id
}
export default citiesActions
