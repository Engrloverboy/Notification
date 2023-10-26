import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualCountry = () => {
  const { segun } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((sodiq) => {
        const matcgingCountry = sodiq.find(
          (simbi) => simbi.name.common === segun
        )
        setCountry(matcgingCountry);
      }).catch((err) => {
            console.error(err);
        })
  }, [segun]);

  //   console.log(country)
  return (
    <div>
      <img src={country?.flags.png} alt="" />
      <h2>{country?.name.common}</h2>
      <ul></ul>
    </div>
  );
};

export default IndividualCountry;
