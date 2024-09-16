
import React,{useState} from 'react'
import ReactStars from "react-rating-stars-component";
import { TailSpin} from "react-loader-spinner";
import { reviewsRef } from '../firebase/firebase';
import { addDoc } from 'firebase/firestore';
import swal from "sweetalert";

const Review = ({id}) => {
    const [rating,setRating]=useState(0);
    const[loading,setLoading]=useState(false);
    const[form,setForm]=useState("");

    const sendReview =async()=>{
        setLoading(true)
    try {
        await addDoc(reviewsRef,{
            movieid: id,
            name:"Alok",
            rating:rating,
            thought:form,
            timestamp:new Date().getTime()
        })
        setRating(0);
        setForm("");
        swal({
            title:"Successfully Added",
            icon:"success",
            buttons:false,
            timer:3000
    
           })
    } catch (error) {
        swal({
            title:error.message,
            icon:"error",
            buttons:false,
            timer:3000
    
           })
    }
    setLoading(false)
}
  return (
    <div className='mt-4 w-full border-t-2 border-gray-700 '>
        <ReactStars value={rating}  half={true} size={30} onChange={(rate)=>setRating(rate)}/>
        <input value={form} onChange={(e)=>setForm(e.target.value)} placeholder='Share Review' className='headercolor w-full p-2 outline-none' />
        <button onClick={sendReview} className='bg-green-500 w-full p-2 flex justify-center'>
            {loading? <TailSpin height={20} color='white'/> : "Share"}</button>
    </div>
  )
}

export default Review