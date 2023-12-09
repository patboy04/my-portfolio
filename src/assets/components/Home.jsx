import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#D1FAE5]'>
        <div className='w-full h-screen mx-auto px-8 flex flex-col justify-center '>
            <h1>Hi! I'm Patrick</h1>
            <h2>I have a passion in</h2>
            <h1 className='max-w-[50vw] text-[#059669]'>Software and Web Development</h1>
            <div>
                <button>About Me </button>
            </div>
        </div>
    </div>
  )
}

export default Home