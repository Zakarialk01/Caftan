import React from 'react';
import Text from "./Text.json"

const Faq = () => {
  return (
    <div>
      <div class="space-y-4 m-16">
      <h3 className='text-center  text-rose-400 font-semibold text-4xl  m-auto rounded-2xl underline font-[poppins]'>Faq...</h3>

        {Text.data.map((item)=>(
 <details
 class="group border-l-4 border-rose-300 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
 close
>
 <summary class="flex items-center justify-between cursor-pointer">
   <h2 class="text-lg font-medium text-gray-900">
    {item.name}
   </h2>

   <span
     class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
   >
     <svg
       xmlns="http://www.w3.org/2000/svg"
       class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
       viewBox="0 0 20 20"
       fill="currentColor"
     >
       <path
         fill-rule="evenodd"
         d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
         clip-rule="evenodd"
       />
     </svg>
   </span>
 </summary>

 <p class="mt-4 leading-relaxed text-gray-700">
 {item.text}
 </p>
</details>

        ))}
 

  
</div>

    </div>
  )
}

export default Faq
