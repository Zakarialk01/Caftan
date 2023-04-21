import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto my-10 font-[poppins]">
      <div className="bg-[#fff5f1] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <Image src={"/assets/logoCaftan.jpeg"} width={80} height={50}  className="rounded-full" alt="footer lgo" />
          <p className="text-center lg:text-start">Fes Adarissa, 32000<br /> fes adarissa rue xxxx from llll</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
        <p className="text-xl font-medium">Accès Rapide</p>
          <p className="text-base">Notre histoire</p>
          <p className="text-base">La boutique</p>
        

          <p className="text-base">Mon compte</p>
          <p className="text-base">Mes commandes</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
        <p className="text-xl font-medium">      Besoin D'aide</p>
          <p className="text-base">      Nous contacter</p>

          <p className="text-base">La livraison</p>
          <p className="text-base">Retour, échange </p>
          <p className="text-base">Conditions générales</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
        <p className="text-xl font-medium">Divers</p>
          <p className="text-base">Confidentialité</p>
          <p className="text-base">Mentions légales</p>
          <p className="text-base">Privacy policy</p>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-gray-500"/>
                <BsTwitter className="text-3xl text-gray-500"/>
                <BsInstagram className="text-3xl text-gray-500"/>
        </div>
 
      </div>

      <h1 className="bg-[#f4e4df] w-full p-2 rounded-full text-center font-medium" >Copyright CaftanItemporelTech@</h1>
    </div>
  );
};
export default Footer 