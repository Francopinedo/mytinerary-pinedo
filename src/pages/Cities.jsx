import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

function Cities() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [noResults, setNoResults] = useState(false); // Agrega el estado noResults

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cities')
      .then((response) => {
        setCities(response.data);
        setFilteredCities(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
    if (filtered.length === 0) {
      setNoResults(true); // Debes tener un estado noResults en tu componente.
    } else {
      setNoResults(false); // Si se encontraron resultados, oculta el mensaje.
    }
  };

  return (
    <>
      <SearchBar cities={cities} onSearch={handleSearch} />
      {noResults ? (
        <h1>No se encontraron resultados</h1>
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
