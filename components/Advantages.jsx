import React from "react";

const Advantages = () => {
  return (
    <div className="container mx-auto bg-gray-100 ">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" className="h-20 " />
          <p className="text-2xl font-semibold">Livraison Rapide</p>
          <p className="text-gray-500 text-center">
          Livraison Colissimo ou Mondial Relay
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1"  className="h-20 " />
          <p className="text-2xl font-semibold">Livraison Offerte</p>
          <p className="text-gray-500 text-center">
          Livraison Offerte à partir de 150 euros d'achat
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" className="h-20 " />
          <p className="text-2xl font-semibold">Modernité et tradition</p>
          <p className="text-gray-500 text-center">
         Cousues à 100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;