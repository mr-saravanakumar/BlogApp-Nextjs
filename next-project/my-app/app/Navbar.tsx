'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const currentPath =usePathname();
  const links=[
    {label:'Blog',way:'/'},
    {label:'Create',way:'/Create'},
    {label:'Contact',way:'/Contact'},
    {label:'About',way:'/About'}
  ]
  return (
    <div className='flex space-x-10 pl-20 mb-5 px-5 h-14 items-center font-semibold font-sans border-b-2 border-black-100 text-zinc-500 sticky top-0 backdrop-blur-lg'>
      {links.map((link)=>{
        return<div key={link.label}>
        <Link href={link.way} className={`${link.way==currentPath ? 'text-black':'text-zinc-400'}`}>{link.label}</Link>
        </div>
      })
      }
    </div>
  )
}

export default Navbar
