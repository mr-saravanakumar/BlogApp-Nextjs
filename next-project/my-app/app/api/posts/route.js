import connectDB from '@/app/lib/mongodb';
import post from "@/app/models/post";
import {NextResponse} from "next/server";

export async function POST(req)
{
     const {topic,imgurl,description}=await req.json();
     try{
      await connectDB();
      await post.create({topic,imgurl,description});
      return NextResponse.json({message:"posted..."})
     }catch(err){
      return NextResponse.json({message:err.message});
     }
}

export async function GET(){
     try{
          await connectDB();
          const posts=await post.find({});
          return NextResponse.json({posts});
         }catch(err){
          return NextResponse.json({message:"No Post available"});
         }
}