import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <div className='flex items-center gap-2'>
        <img src="/public/logo.svg" alt="" className='h-14 w-12'/>
        <h2 className="text-[24px] font-extrabold font-[Segoe UI Emoji] tracking-wide text-green-500">TravelGuide AI</h2>
        </div>
        <div>
            <Button>Sign in</Button>
        </div>
    </div>
  )
}

export default Header