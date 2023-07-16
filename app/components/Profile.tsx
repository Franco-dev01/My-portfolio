import React from "react";
import profileImg from "app/assets/download.jpg";

const Profile = () => {
  return (
    <div className="my-24 p-24 ">
      <div className="rounded-full">
        <img
          className="inline-block h-24 rounded-full ring-2 ring-white cursor-pointer"
          src={profileImg}
          alt="Profile photos"
        />
      </div>

      <div className="mt-2">
        <div className="flex flex-col text-center justify-center items-center">
          <div className="text-slate-700 uppercase font-bold tracking-wider text-2xl">
            Kouakou kouakou Francis
          </div>
          <div className="text-bold text-slate-700 leading-snug text-yellow-300 text-lg">
            Fontend / Backend Developper
          </div>
          <div className="mt-2 text-sm text-slate-600 w-2/4 text-center">
            Je suis un développeur passionné et ma mission est de repousser les
            limites et de réaliser ce qui est considéré comme inimaginable. Je
            suis constamment inspiré par les défis techniques et je suis motivé
            par la possibilité de créer des solutions innovantes qui
            transforment la façon dont nous interagissons avec la technologie.
          </div>

          <button
            type="button"
            className="rounded-full bg-indigo-500 px-1 w-24 items-center justify-center text-white text-md my-2"
          >
            <small>ABOUT ME</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
