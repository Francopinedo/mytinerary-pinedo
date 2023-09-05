import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselSection() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cities")
      .then((response) => {
        setCities(response.data);
        setFilteredCities(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const [step, setStep] = useState(0);

  // STEPS
  const handlerNext = () => {
    if (step < cities.length / 4 - 1) {
      setStep(step + 1);
    }
  };

  const handlerBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="carousel-section ">
      <div className="carousel-controls">
        <button className="btn-c"onClick={handlerBack} disabled={step === 0}>
          Back
        </button>
        <button className="btn-c" onClick={handlerNext} disabled={step === cities.length / 4 - 1}>
          Next
        </button>
      </div>

      <Carousel selectedItem={step} showArrows={false} showThumbs={false}>
        {cities.map((city) => (
          <div key={city._id}>
            <a href={`/city/${city._id}`} className="city-card">
              <a href={`/city/${city._id}`}><img src={city.img} alt={city.name} /></a>
              <h3>{city.name}</h3>
              <p>{city.info}</p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
