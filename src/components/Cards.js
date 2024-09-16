import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Bars } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from 'react-router-dom';

const Cards = () => {
  const [data, setData] = useState([]);
  const[loading,setLoading]=useState(false)

  useEffect(()=>{
    const getData =async()=>{
      setLoading(true);
    const _data= await getDocs(moviesRef);
    _data.forEach((doc)=>{
      setData((prv)=>[...prv,{...(doc.data()),id:doc.id}])
    })
      setLoading(false)
     
    }
getData();
  },[])

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {loading? <div className="w-full flex justify-center items-center"><Bars height={500} /></div> :
      data.map((e, i) => {
        return (
          <Link to={`/Detail/${e.id}`}>
          <div
            key={i}
            className="card shadow-lg font-medium hover:-translate-y-3 transition-all duration-500 cursor-pointer p-3  mt-6"
          >
            <img className=" h-60 md:h-72 w-40 md:w-60  " src={e.image} />
            <h1>
              <span className="text-gray-500">Name:</span> {e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-500 mr-2">Rating:</span>
              <ReactStars half={true} size={20} value={5} edit={false} />
            </h1>
            <h1>
              <span className="text-gray-500">Year:</span> {e.year}
            </h1>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
