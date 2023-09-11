import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";

const initialState = {
  cities: [
    {
      name: "",
      info: "",
      img: "",
      currency: "",
      country: "",
      language: "",
      itineraries: [],
    },
  ],
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(citiesActions.get_cities.fulfilled, (state, action) => {
    return { ...state, cities: action.payload.cities };
    
  })
  .addCase(citiesActions.filter_cities_id.fulfilled,(state,action)=>{
const newState = { ...state, city: action.payload.city }
return newState
  })
});

export default citiesReducer;