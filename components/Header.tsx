/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { BeakerIcon, HomeIcon, ChevronDownIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'
import {StarIcon, BellIcon, ChartBarIcon, GlobeAltIcon, PlusIcon, SparklesIcon, SpeakerWaveIcon, VideoCameraIcon} from '@heroicons/react/24/outline'
import {signIn, signOut, useSession} from 'next-auth/react'



function Header() {
  const {data: session} = useSession();
  return (
    
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-[80px] flex-shrink-0 cursor-pointer'>
            <img src="https://www.socialmediaexaminer.com/wp-content/uploads/2012/08/bb-reddit.png" alt="" />
        </div>

        <div className='flex mx-7 items-center xl:min-w-[300px]'>
            <HomeIcon className='w-6 h-6'/>
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon className='w-6 h-6'/>
        </div>

        <form className='flex flex-1
        items-center space-x-2 rounded-sm border-gray-200 bg-gray-100 px-3 py-1'>
          <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
          <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit' />
          <button hidden type='submit'></button>
        </form>

        <div className='flex text-gray-500 items-center space-x-2 hidden lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeAltIcon className='icon'/>
            <VideoCameraIcon className='icon'/>
            <hr  className='h-10 border border-gray-100'/>
            <ChartBarIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon'/>
            <SpeakerWaveIcon className='icon'/>
        </div>
        <div className='ml-5 flex items-center'>
            <Bars3Icon className='icon lg:hidden cursor-pointer'/>
        </div>
        {session ? (<div onClick={() => signOut()} className='flex items-center space-x-2 hidden lg:flex border-gray-100 p-2 cursor-pointer'>
            <img src="https://konto.chip.pl/uploads/2019/10/w4LOMW8R5hX5143fQ1Yj2DVE6P3wFU1V.png" alt="" className='h-5 w-5 ml-2 object-contain' />
            <p>Sign Out</p>
        </div>) : (<div onClick={() => signIn()} className='flex items-center space-x-2 hidden lg:flex border-gray-100 p-2 cursor-pointer'>
            <img src="https://konto.chip.pl/uploads/2019/10/w4LOMW8R5hX5143fQ1Yj2DVE6P3wFU1V.png" alt="" className='h-5 w-5 ml-2 object-contain' />
            <p>Sign In</p>
        </div>)}
        
    </div>
  )
}

export default Header

