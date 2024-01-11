"use client";
import React,{useEffect,useState} from 'react'
import axios from 'Axios';
import Link from 'next/link';
const page = () => {

  const [posts,setPosts]=useState([]);
  const[search,setSearch] = useState('');
  const[loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts")
     .then((response) => {
      setPosts(response.data.posts);
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
    <div className='flex'>
      <div className="grid grid-cols-1 m-10 gap-[100px] md:grid-cols-2">
        {posts.map((post) => (
            <Link key={post._id} href={"/Singlepost/"+post._id}>
            <div key={post._id} className="w-[500px] h-[450px] p-5 space-y-5 rounded-lg shadow-2xl">
            <p className="text-lg font-mono">{post.topic}</p>
            <img src={post.imgurl} height="200"/>
            <p>{post.description.substring(0, 250)}....</p>
            <p className="flex justify-center font-light text-md text-zinc-700">Posted  {post.date}</p>
            </div>
            </Link>
        ))}
      </div>
      <div className="hidden border-2 border-b-slate-500 w-[300px] h-[450px] m-[80px] rounded-md sticky top-[100px] shadow-2xl lg:block">
        <input type="text" onChange={(e)=>e.target.value} />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBAp7qAqt9xRRasIL7tQyGjflsUMaPhlfIA&usqp=CAU' width="200" className='m-10'/>
        <p className='text-xl text-violet-900 flex justify-center'>Hi !</p>
        <p className='text-3xl ml-4 mt-2 font-serif text-violet-600'>Share Your Blogs</p>
        <p className='text-2xl m-6 font-serif text-violet-500' >To Share Your Idea..</p>
      </div>
    </div>
  )
}

export default page
