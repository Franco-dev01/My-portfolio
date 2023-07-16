import React from "react";
import vscodelogo from "app/assets/th.jpg";
import vslogo from "app/assets/th (1).jpg";
import gitlogo from "app/assets/git-logo.png";
import intelijlogo from "app/assets/IntelliJ_IDEA_Edu_Icon.svg.png";

export default function IdeTools() {
  return (
    <div className="ide-tools my-24">
  <div className="text-slate-700 text-2xl">IDE AND DEV TOOLS</div>
  <small className="text-yellow-300 text-lg uppercase">That is used for coding</small>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
    <div className="border-2 border-yellow-600 p-4">
      <div className="flex items-center justify-center">
        <img className="inline-block w-24 h-24 object-contain cursor-pointer" src={vscodelogo} alt="vs code logo" />
        <div>
          <div className="font-bold text-xl">VS CODE</div>
          <div className="font-small text-md text-yellow-500">Lorem ipsum.</div>
          <div className="font-small text-md">Lorem ipsum dolor sit amet..</div>
        </div>
      </div>
    </div>

    <div className="border-2 border-yellow-600 p-4">
      <div className="flex items-center justify-center">
        <img className="inline-block w-24 h-24 object-contain cursor-pointer" src={intelijlogo} alt="intelij logo" />
        <div>
          <div className="font-bold text-xl">INTELLIJ</div>
          <div className="font-small text-md text-yellow-500">Lorem ipsum.</div>
          <div className="font-small text-md">Lorem ipsum dolor sit amet..</div>
        </div>
      </div>
    </div>

    <div className="border-2 border-yellow-600 p-4">
      <div className="flex items-center justify-center">
        <img className="inline-block w-24 h-24 object-contain cursor-pointer" src={vslogo} alt="visual studio logo" />
        <div>
          <div className="font-bold text-xl">VISUAL STUDIO</div>
          <div className="font-small text-md text-yellow-500">Lorem ipsum.</div>
          <div className="font-small text-md">Lorem ipsum dolor sit amet..</div>
        </div>
      </div>
    </div>

    <div className="border-2 border-yellow-600 p-4">
  <div className="flex items-center justify-center text-center">
    <img className="inline-block w-24 h-24 object-contain cursor-pointer" src={gitlogo} alt="git logo" />
    <div className="ml-4">
      <div className="font-bold text-xl">GIT</div>
      <div className="font-small text-md text-yellow-500">Lorem ipsum.</div>
      <div className="font-small text-md">Lorem ipsum dolor sit amet..</div>
    </div>
  </div>
</div>

  </div>
</div>

  );
}
