"use client";
import { useRouter } from 'next/navigation';
import React,{useState,useEffect,useRef}from 'react'
import axios from 'Axios';
import {Flex, TextArea, TextField,Button} from '@radix-ui/themes';
import Swal from 'sweetalert2' ;
const page = () => {
  const inputRef = useRef(null);
  const [msg,setMsg] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg('');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [msg]);

   
 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter();
  
  const [topic,setTopic] =useState('');
  const [imgurl,setImgurl] = useState('')
  const [description,setDescription] = useState('');
  
  const posting=async()=>{
    if(!topic||!imgurl||!description)
    {
      setMsg("Required....");
      return;
    }
    await axios.post("http://localhost:3000/api/posts",{
      topic: topic,
      imgurl: imgurl,
      description: description,
    }).then(response=>console.log(response.data.message));
    Swal.fire('','Posted..','success')
    router.push('/');
  }

  return (
    <div>
    <p className="flex justify-center align-center text-3xl font-mono text-teal-500">CREATE YOUR BLOG</p>
      <div className="flex justify-center align-center items-center ml-2 mt-[140px] space-y-10"> 
      <div className="space-y-10">
      <input type="text" className="focus:border-blue-500 border-2 border-zinc-200 rounded-sm text-sm w-[500px] h-[30px] " placeholder='Topic...' onChange={(e)=>setTopic(e.target.value)}/><br/>
      <input type="text" className="border-2 border-zinc-200 rounded-sm text-sm w-[500px] h-[30px]" placeholder='Url...' onChange={(e)=>setImgurl(e.target.value)}/>
      <TextArea placeholder="Description...." className='w-[500px] h-[100px]' onChange={(e)=>setDescription(e.target.value)}/>
      <p className='flex justify-center text-red-700'>{msg}</p>
      <Button color="pink" className='w-[500px] cursor-grab' onClick={posting}>POST</Button>
      </div>
      </div>
    </div>
  )
}

export default page
