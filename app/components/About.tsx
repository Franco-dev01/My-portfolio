import React from "react";
import thinkerImg from "app/assets/thinker.jpeg";
import learnImg from "app/assets/learn.jpeg";
import commitedImg from "app/assets/commited.jpeg";
import attentionImg from "app/assets/attentiion.jpeg";

export default function About() {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-2 my-24" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-full">
          <img
            className="inline-block h-24 rounded-full ring-2 ring-white cursor-pointer hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"
            src={learnImg}
            alt="Profile photos"
          />
          <div className="text-slate-700">FAST LEARNER</div>
          <div className="text-slate-500">
            Je suis quelqu'un qui apprend très vite et qui s'adapte facilement à
            son environnement. J'ai une soif de connaissances et je suis
            constamment à la recherche de nouvelles opportunités
            d'apprentissage. J'ai un esprit curieux et je suis toujours prêt à
            relever de nouveaux défis.
          </div>
        </div>

        <div className="rounded-full">
          <img
            className="inline-block h-24 rounded-full ring-2 ring-white cursor-pointer hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"
            src={commitedImg}
            alt="lerner photos"
          />
          <div className="text-slate-700">COMMITED</div>
          <div className="text-slate-500">
            Je suis une personne profondément engagée dans tout ce que je fais.
            Que ce soit dans ma vie personnelle ou professionnelle, je
            m'investis pleinement et je donne le meilleur de moi-même.
          </div>
        </div>

        <div className="rounded-full">
          <img
            className="inline-block h-24 rounded-full ring-2 ring-white cursor-pointer hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"
            src={attentionImg}
            alt="commited photos"
          />
          <div className="text-slate-700">ATTENTION TO DETAILS</div>
          <div className="text-slate-500">
            Je suis une personne extrêmement minutieuse et je porte une grande
            attention aux détails dans tout ce que je fais. J'ai une nature
            perfectionniste et je crois fermement que chaque petite étape compte
            pour obtenir un résultat final de haute qualité.
          </div>
        </div>

        <div className="rounded-full">
          <img
            className="inline-block h-24 rounded-full ring-2 ring-white cursor-pointer hover:shadow-2xl hover:scale-75 hover:transition delay-150 duration-300 ease-in-out"
            src={thinkerImg}
            alt="thinker photos"
          />
          <div className="text-slate-700">THINKER</div>
          <div className="text-slate-500">
            Je suis quelqu'un qui a la capacité de penser à tout et de maintenir
            une vision globale dans tout ce que j'entreprends. J'ai un esprit
            analytique et stratégique qui me permet de prendre en compte tous
            les aspects d'une situation et d'élaborer des plans d'action
            complets. Je suis attentif aux détails, mais je vais au-delà. 
            pertinents.
          </div>
        </div>
      </div>
    </div>
  );
}
