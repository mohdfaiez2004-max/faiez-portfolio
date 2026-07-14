import { useState } from 'react'
// 1. Path ab badal gaya hai: assets folder ke andar my-page
import profileImg from './assets/img.jpg' 

function App() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-purple-600'>
      <div className='h-[600px] w-[500px] bg-white rounded-[32px] border-none p-4 overflow-hidden'> 
        
        <header className='h-[250px] w-full flex items-center justify-center border-b corder-slate-200'>
          {/* 2. Variable ko bina quotes ke curly brackets {} mein pass karo */}
          <img 
            src={profileImg} 
            alt="profile" 
            className="w-[200px] h-[200px] object-cover rounded-full"
          />
        </header>
        <section>

        </section>

      </div>
    </div>
  )
}

export default App