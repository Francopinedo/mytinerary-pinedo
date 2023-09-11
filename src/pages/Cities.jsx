import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../store/actions/cities';
import store from '../store/store';
import citiesReducer from '../store/reducers/cities';

function Cities() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [noResults, setNoResults] = useState(false); 
  const [isLoading, setIsLoading] = useState(true);
  let citiesInStore = useSelector(state => state.citiesReducer.cities);
const dispatch = useDispatch();

console.log("Estado actual del store:", citiesInStore);

useEffect(() => {

  axios
    .get('http://localhost:3000/api/cities')
    .then((response) => {
      const citiesData = response.data;
      dispatch(citiesActions.get_cities(citiesData)); 
      setFilteredCities(citiesData); 
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });
}, [dispatch]);

  const handleSearch = (searchTerm) => {
    const filtered = citiesInStore.filter((city) =>
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  return (
    <>
    
      <SearchBar cities={cities} onSearch={handleSearch} />
     
      {noResults ? (
        <h1>No results</h1>
        
      ) : (
        <div className="flex flex-wrap justify-center items-center">
         
          {filteredCities.map((city) => (
          
            <a
              key={city._id}
              href={`/city/${city._id}`}
              className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-12"
            > 
              <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={city.img} layout="fill" alt={city.name} />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {city.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {city.info}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Read More
                </button>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Cities;
