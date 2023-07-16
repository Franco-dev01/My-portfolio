import React from "react";
import profileImg from "app/assets/prject.jpg";


export default function Project() {
  return (
    <div id="project">
    <div className="text-slate-700 text-2xl">PROJECTS</div>
    <div className="text-yellow-300 text-lg uppercase">Projects I've made</div>
  
{/*     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto">
      <div className="row-span-3">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>
      <div className="row-span-3">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>
      <div className="row-span-3 col-span-1">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>
      <div className="row-span-3 col-span-1">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>

      <div className="row-span-3 col-span-1">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>
      <div className="row-span-3 col-span-1">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>
      <div className="row-span-3 col-span-1">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>
      <div className="row-span-3 col-span-1">
        <img className="inline-block ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={profileImg} alt="Profile photos" />
      </div>
    </div> */}

<div className="overflow-x-auto">
  <div className="flex gap-4 text-center justify-center items-center">
    <img src={profileImg} alt="Image 1" className="inline-block h-72 w-72 ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"/>
    <img src={profileImg} alt="Image 2" className="inline-block h-72 w-72 ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"/>
    <img src={profileImg} alt="Image 3" className="inline-block h-72 w-72 ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"/>
    <img src={profileImg} alt="Image 3" className="inline-block h-72 w-72 ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"/>
    <img src={profileImg} alt="Image 3" className="inline-block h-72 w-72 ring-2 h-full ring-white object-cover scale-50 transform-gpu cursor-pointer rounded hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"/>


  </div>
</div>


    
  </div>
  
  );
}
