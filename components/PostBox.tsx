import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar';
import {LinkIcon, PhotoIcon} from '@heroicons/react/24/outline'
import { useForm } from "react-hook-form";

type FormatData = {
postTitle: string
postBody: string
postImage: string
subreddit: string
}

function PostBox() {
    const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

    const {data: session} = useSession();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormatData>();


    const onSubmit = handleSubmit(async (formatData) => { 
        console.log(formatData)
     })

  return (
    <form onSubmit={onSubmit} className='stricky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
        <div className='flex items-center space-x-3'>
            <Avatar/>

            <input
            {...register('postTitle', {required: true})} 
            disabled={!session}
            type="text" 
            placeholder={session ? 'Create a post by entering a title' : 'Sign in to post'} 
            className='rounden-md flex-1 bg-gray-50 p-2 pl-5 outline-none'
            />
            

            <PhotoIcon onClick={()=> setImageBoxOpen(!imageBoxOpen)} className={`icon ${imageBoxOpen && 'text-blue-300'}`}/>
            <LinkIcon className='icon'/>
        </div>
        {!!watch('postTitle') && (
            <div className='flex flex-col py-2'>
                <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Body</p>
                    <input 
                    className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                    {...register('postBody')}
                    type="text" placeholder='Text (Optional)' />
                </div>
                
                <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Subreddit</p>
                    <input 
                    className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                    {...register('subreddit')}
                    type="text" placeholder='i.e. reactjs' />
                </div>

                {imageBoxOpen && (
                    <div className='flex items-center px-2'>
                    <p className='min-w-[90px]'>Image URL:</p>
                    <input 
                    className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                    {...register('postImage')}
                    type="text" placeholder='Optional...' />
                </div>
                )}
                {Object.keys(errors).length > 0 && (
                    <div className='space-y-2 p-2 text-red-500'>
                        {errors.postTitle?.type === 'required' && (
                            <p>-A Post Title is required</p>
                        )}
                    </div>
                )}

                {!!watch('postTitle') && (
                    <button 
                    type='submit' 
                    className='w-full rounded-full bg-blue-400 p-2 text-white'>
                        Create post
                        </button>
                )}
            </div>
        )}
    </form>
  )
}

export default PostBox