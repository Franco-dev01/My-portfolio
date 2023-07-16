import React from "react";
import { NavLink } from "@remix-run/react";
import emaillogo from "app/assets/email.png";
import linkedinllogo from "app/assets/linkedin.png";
import fblogo from "app/assets/facebook.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-24" id="contact">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">À propos de nous</h2>
            <p>
              Nous sommes une entreprise spécialisée dans le développement de
              logiciels sur mesure. Nous concevons des solutions personnalisées
              adaptées aux besoins spécifiques de nos clients. Que ce soit pour
              la gestion des opérations, la création d'applications mobiles ou
              le développement de logiciels d'entreprise, nous sommes là pour
              vous accompagner à chaque étape.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Liens rapides</h2>
            <ul className="list-none">
              <li>
                <NavLink to="#" className="text-gray-400 hover:text-white">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-400 hover:text-white">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-400 hover:text-white">
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-400 hover:text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Suivez-nous</h2>
            <ul className="flex space-x-4">
              <li>
                <NavLink to="mailto:kouakoufrancis809@gmail.com">
                  <i className="fab fa-facebook text-gray-400 hover:text-white"><img className="h-10 w-10 hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={emaillogo} alt="email logo"/></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.linkedin.com/in/francis-kouakou-kouakou-427b06154/" className="_blank">
                  <i className="fab fa-twitter text-gray-400 hover:text-white"> <img className="h-10 w-10 hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={linkedinllogo} alt="linkedin logo"/></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <i className="fab fa-instagram text-gray-400 hover:text-white"><img className="h-10 w-10 hover:scale-75 hover:transition delay-150 duration-300 ease-in-out" src={fblogo} alt="fb logo"/></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 px-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          &copy; 2023 Franco-dev. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
