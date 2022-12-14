import { useSession } from 'next-auth/react'
import React from 'react'

type Props ={
    seed?: string
    large?:boolean
}

function Avatar({seed, large}: Props) {
    const {data:session} = useSession();

  return (
    <div className={`h-10 w-10 rounded-full border-gray-300 bg-white overflow-hidden ${large && 'h-20 w-20'}`}>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed || session?.user?.name || 'placehorder'}.svg`} alt="" />
    </div>
  )
}

export default Avatar