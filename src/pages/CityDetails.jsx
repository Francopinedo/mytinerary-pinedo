import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from '../store/actions/cities';
import store from '../store/store';
import citiesReducer from '../store/reducers/cities';
import axios from "axios"
function CityDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cityDetails, setCityDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [itineraries, setItineraries] = useState([]);


  useEffect(() => {
    dispatch(citiesActions.filter_cities_id(id))
      .then((response) => {
        const cityData = response.payload.city;
        console.log(cityData)
        setCityDetails(cityData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error data:", error);
        setIsLoading(false);
      });
  }, [dispatch, id]);
  
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl m-8">
          {cityDetails?.name}
        </h1>
        <h2 className="font-display text-5xl tracking-tight text-neutral-950 sm:text-7xl m-10">
          {cityDetails?.info}
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <div>
          <img
            className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
            src={"../../" + cityDetails?.img}
            alt="IMG"
          />
        </div>
      </div>
      {cityDetails.itineraries && cityDetails.itineraries.length === 0 ? (
         <h1>There are no registered itineraries in this city</h1>
         ) : (
      <div id="FULL_TINERARY">
        <div className="m-10">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Itineraries
          </button>
        </div>

        <div className="flex items-center justify-center">
          <div id="USER" className="w-96">
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src="../../public/user.png" alt="profile-picture" />
              </div>
              <div class="p-6 text-center">
                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Username
                </h4>
                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                  User
                </p>
              </div>
            </div>
          </div>

          <div id="DATA" className="w-96">
            <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Itinerary
                </h5>
              
                <ul>
               
                {itineraries.map((itinerary, index) => (
                  
                 
                    <li key={index}>
                      {console.log(itinerary.name)}
                      <h2>{itinerary.name}</h2>
                      <p>{itinerary.info}</p>
                      <p>Duration: {itinerary.duration}</p>
                      <p>Price: {itinerary.price}</p>
                      <p>Tags: {itinerary.tags}</p>
                      <p>Likes: {itinerary.likes}</p>
                      <p>User: {itinerary.nameUser}</p>
                      <img src={itinerary.imgUser} alt={itinerary.nameUser} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>)}

      <div className="mt-8">
        <Link to="/cities">
          <button
            variant="text"
            className="text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
          >
            Back to Cities
          </button>
        </Link>
      </div>
    </>
  );
}

export default CityDetails;
