import React from 'react'
const Cta = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20 '>
            <p className=' text-xl md:text-2xl lg:text-4xl font-medium text-center'>Abonnez Vous À Notre NewsLetter</p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'>Recevoir Un Mail Dans Le Cas D'une Promotion, D'une Offre, Nouvel arrivage</p>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
                <input type="text" className=' px-5 py-5 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='enter a email' />
                <button className="font-semibold bg-rose-300 btn btn-sm lg:btn-lg text-white  px-5 py-5 border-none w-36 lg:w-44  rounded-full">Envoyer</button>
            </div>
    </div>
  )
}

export default Cta