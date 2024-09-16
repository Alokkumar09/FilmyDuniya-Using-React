import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ThreeDots} from "react-loader-spinner";
import Review from "./Review";

const Detail = () => {
  const { id } = useParams();
  const[loading,setLoading]=useState(false)
  const [data, setData] = useState({
    name: "",
    year: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const getData = async () => {
        setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false)
    };
    getData();
  }, []);

  return (
    
    <div className="p-3 mt-4 flex flex-col md:flex-row items-center md:items-start justify-center w-full">
      {
      loading? <div className="w-full flex justify-center items-center"><ThreeDots height={500} color="white"/></div> :  
      <>
      <img className="h-96 block md:sticky top-20" src={data.image} />
      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-3xl text-gray-500 font-bold">
          {data.name}
          <span className="text-xl">({data.year})</span>
        </h1>
        <ReactStars value={4.5} edit={false} half={true} size={20} />
        <p className="font-4xl">{data.discription}</p>
        <Review id={id}/>
      </div>
      </>
      }
    </div>
  );
};

export default Detail;
