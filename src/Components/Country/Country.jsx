import PropTypes from 'prop-types'
import { useState } from 'react';
import Swal from 'sweetalert2';
const Country = ({country,handleVisitedCountries}) => {
    // console.log(country)
    const {name,flags,cca3} = country
    const [visited, setVisited] = useState(false)
    const [markVisited, setMarkVisited] = useState(false)
    const handleMarkVisited = () => {
      setMarkVisited(true)
    }
    const handleError = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Marked",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    console.log(markVisited)
    const handleVisited = () => {
        setVisited(true)
    }

    return (
        <div className="card card-compact w-96  bg-gradient-to-r from-blue-100 to-blue-500 shadow-xl">
        <figure className="p-3 "><img className="rounded-lg" src={flags.png} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name.common}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
          <div className="card-actions justify-center">
          {
            markVisited === true ?
            <button onClick={handleError} className='btn bg-gradient-to-r from-purple-400 to-purple-700 text-gray-100'>Mark As Read</button>
            :
            <button onClick={() => {handleVisitedCountries(country);handleMarkVisited()}} className='btn bg-gradient-to-r from-purple-400 to-purple-700 text-gray-100'>Mark As Read</button>
          }
            {
                visited === true ? <button className="btn btn-primary">Completed</button>
                :
                <button onClick={handleVisited} className="btn btn-primary">Visited</button>
            }
          </div>
        </div>
      </div>
    );
};
Country.propTypes ={
    country: PropTypes.arr
}
export default Country;