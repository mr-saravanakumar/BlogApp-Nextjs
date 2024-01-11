"use client";
import React,{useEffect} from 'react';
import axios from 'Axios';

const page = ({params}) => {
  const[loading,setLoading] = React.useState(true);
  const [singlepost,setSinglepost]=React.useState([]);
 const id=params.id;
 console.log("SINGLE POST ID"+id);


 useEffect(() => {
    axios.get(`http://localhost:3000/api/posts/${id}`)
     .then((response) => {
      setSinglepost(response.data.spost);
      console.log(response.data.spost);
      setLoading(!loading);
     })
     .catch((error) => {
      console.log(error);
     });
   },[]);

   if(loading){
    return <h1 className="flex justify-center align-center ">Loading...</h1>
  }



  return (
    <div className="space-y-5">
      <p className="flex justify-center text-2xl font-bold text-fuchsia-700 font-mono">{singlepost.topic}</p>
      <div className="flex justify-center">
      <img src={singlepost.imgurl} width={500} height={500} />
      </div>
      <p className='text-xl font-thin flex justify-center text-slate-500'>{singlepost.date}</p>
      <div className='flex justify-center'>
      <p className='w-[1000px] font-serif text-lg'>{singlepost.description}</p>
      </div>
    </div>
  )
}

export default page;
