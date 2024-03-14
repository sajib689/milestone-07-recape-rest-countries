import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import Visited from "../Visited/Visited";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountries = country => {
    const totalVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(totalVisitedCountries);
  }
  let count = visitedCountries.length;
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Moni ay dekho koto gula countries: {countries.length}</h1>
      <div className="container mx-auto">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Population</th>
        <th>Area</th>
      </tr>
    </thead>
    <tbody>
      {
        visitedCountries.map(visitedCountrie => <Visited count={count} key={visitedCountrie.cca3} visitedCountrie={visitedCountrie}></Visited>)
      }
      
    </tbody>
  </table>
</div>
      </div>
      <div className="mt-20 grid grid-cols md:grid-cols-3 gap-5">
      {countries.map((country) => (
        <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;
