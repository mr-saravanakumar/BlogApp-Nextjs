import connectDB from '@/app/lib/mongodb';
import {NextResponse} from "next/server";
import post from "@/app/models/post";

export async function GET(req,{params}){
     const id =params.id;
     console.log("backend id"+id);
    try{
         await connectDB();
         const spost=await post.findById(id)
         console.log(spost);
         return NextResponse.json({spost});
        }catch(err){
         return NextResponse.json({message:"No Post available"});
        }
}