import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        {/* getform for contact requests from getform.io */}
        <form method="POST" action='https://getform.io/f/3e1811f0-2aed-4955-b44e-554278f812cf' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-emerald-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below to contact me!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' ></textarea>
            <button className='text-white border-2 hover:bg-emerald-300 hover:border-emerald-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Work Together</button>
        </form>
    </div>
  )
}

export default Contact