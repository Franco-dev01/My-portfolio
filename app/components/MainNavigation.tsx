import React from 'react';
import fdLogo from "app/assets/franco-dev-logo.png"
import { NavLink } from '@remix-run/react';

export default function MainNavigation() {
  
  return (
    
    <div className="relative z-40">

    <nav className="fixed top-0 left-0 right-0 shadow-2xl bg-gray-700">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
      <div className="relative flex items-center justify-between h-16">
  
        <div className="flex-shrink-0">
          <NavLink to="#" className="text-white text-lg font-semibold"><img src={fdLogo} alt='logo' className='w-12'/></NavLink>
        </div>
  
      
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink to="#" className="text-gray-200 hover:bg-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Accueil</NavLink>
            <NavLink to="#project" className="text-gray-200 hover:bg-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projets</NavLink>
            <NavLink to="#about" className="text-gray-200 hover:bg-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">À propos</NavLink>
            <NavLink to="#contact" className="text-gray-200 hover:bg-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
          </div>
        </div>
  
      
        <div className="-mr-2 flex md:hidden">
          <button type="button" id="mobile-menu-button" className="text-gray-400 hover:text-white focus:outline-none focus:text-white" aria-label="Open menu">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  

    <div className="md:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</NavLink>
        <NavLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</NavLink>
        <NavLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">À propos</NavLink>
        <NavLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</NavLink>
      </div>
    </div>
  </nav>
    </div>

  )
}
