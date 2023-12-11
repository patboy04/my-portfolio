import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoDocumentText } from "react-icons/io5";


const Contact = () => {
    const [clipboardState, setClipboardState] = useState(false)
    const email = "theofficialjp@gmail.com"

    const handleCopy = () => {
        setClipboardState(prevState => !prevState)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setClipboardState(false);
        }, 4000);

        return () => {
            clearTimeout(timeout);
        }
    }, [clipboardState])

  return (
    <div name='contact' className='w-full min-h-screen bg-[#D1FAE5] flex flex-col justify-center items-center py-4 md:py-20'>
        <h1 className='text-2xl sm:text-4xl'>Send me an Email!</h1>
        <CopyToClipboard text={email} onCopy={handleCopy}>
            <span className='text-2xl sm:text-4xl text-[#059669] py-4 underline hover:scale-110 duration-300 hover:cursor-pointer'>
                {email}
            </span>
        </CopyToClipboard>
        {clipboardState && <p>Copied to Clipboard!</p>}
        <button className='w-[200px] md:w-[35vw] text-sm md:text-2xl border-2 border-[#059669] rounded-lg p-4 my-4 flex justify-center items-center gap-2 hover:bg-[#059669] hover:scale-110 duration-200'>
            Download my CV
            <IoDocumentText size={30}/>
        </button>
    </div>
  )
}

export default Contact