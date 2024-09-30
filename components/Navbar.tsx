"use client"

import Link from "next/link"
import Image from "next/image"
import CustomButton from './CustomButton'
import { navbarLinks } from "@/constants"
import { useRouter } from "next/navigation"


const Navbar = () => {

const router = useRouter();
    
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
       <Link href="/" className="flex justify-center items-center">
        <Image 
           src="/logo.svg"
           alt="Car Hub logo"
           width={118}
           height={18}
           className="object-contain"
           />          
       </Link>
       <div className="flex gap-4 items-center justify-between font-bold">
         {navbarLinks.map((link)=> (
             <Link href={link.url} key={link.id}>{link.title}</Link>
         ))}
       </div>
       <CustomButton 
          title ="Sign In/ Register"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={()=>router.push('/dashboard/login')}
       />
      </nav>
    </header>
  )
}

export default Navbar