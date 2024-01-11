"use client";
import React,{useEffect,useState} from 'react'
import axios from 'Axios';
import Link from 'next/link';
const page = () => {

  const [posts,setPosts]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts")
     .then((response) => {
      setPosts(response.data.posts);
     })
     .catch((error) => {
      console.log(error);
     });
   },[]);


  return (
    <div className='flex'>
      <div className="grid grid-cols-2 m-10 gap-[100px]">
        {posts.map((post) => {
          return  <article key={post._id} className="w-[500px] h-[450px] p-5 space-y-5 rounded-lg shadow-2xl">
             <p className="text-lg font-mono">{post.topic}</p>
             <p>hii</p>
             <img src={post.imgurl} height="200"/>
             <p>{post.description.substring(0, 250)}....</p>
             <p className="flex justify-center font-light text-md text-zinc-700">Posted  {post.date}</p>
             <button onClick={()=>console.log(post._id)}>CLICK</button>
          </article>

        })}
       
      </div>
      <div className="border-2 border-b-slate-500 w-[300px] h-[450px] m-[80px] rounded-md sticky top-[100px] shadow-2xl">
        <p className="flex justify-center mt-3">REMARKS</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBAp7qAqt9xRRasIL7tQyGjflsUMaPhlfIA&usqp=CAU' width="200" className='m-10'/>
        <p className='text-xl text-violet-900 flex justify-center'>Hi !</p>
        <p className='text-3xl ml-4 mt-2 font-serif text-violet-600'>Share Your Blogs</p>
        <p className='text-2xl m-6 font-serif text-violet-500' >To Share Your Idea..</p>
      </div>
    </div>
  )
}

export default page
