import React from 'react';
import bestSellers from './bestSellers';



const Bestproducts = () => {

  return (
    <>
    <h3 className='text-center  text-rose-400 font-semibold text-4xl  m-auto rounded-2xl underline font-[poppins]'>Ils ont Du Succés...</h3>
<div className="flex m-24 flex-wrap  justify-around font-[poppins]">
					{bestSellers.data
						
						.map((choice) => (
							<div className='shadow-sm shadow-gray-500 mt-8'>
								<a href="#" class="relative block border border-gray-100">
                <button
    class="absolute end-4  z-10 rounded-full bg-white p-1.5 text-rose-900 transition hover:text-gray-900/75"
  >
    <span class="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>
									<img
										alt=""
										src={choice.image}
										class="h-36 w-full object-contain rounded-lg lg:h-56 "
									/>
                  <div className='m-8 '>
                      
							
										<h3 class="text-lg text-[#e6b29e]  font-bold text-center">{choice.name}</h3>
								
										
												
												<p className='text-black font-semibold text-center'>{choice.price}</p>
                        <button className="bg-rose-300 mt-2 btn btn-sm lg:btn-lg text-white  px-4 py-2 border-none w-36 lg:w-44  rounded-full">Ajouter</button>

											</div>
									
										
									
								</a>
							</div>
						))}
				</div>
      
      
    </>
  );
};

export default Bestproducts