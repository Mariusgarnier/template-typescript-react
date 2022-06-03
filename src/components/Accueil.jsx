import React from "react";
import { Link } from "react-router-dom";

function Accueil() {

  return (
    // <div className="App">
    //   <img className="img-logo-ministere" src="logo-ministere.png" alt="logo-ministere"></img>
    //   <div className='container-left'>
    //     <img className="marqueur" src="Marqueur.PNG" alt=""></img>
    //     <p>Visualisation <br /> des <span>usages</span></p>
    //   </div>

    //   <div className='container-right'>
    //     <img className='img-cahier' src="cahier.png" alt="cahier" />
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     </p>
    //     <Link to='/Usage'>
    //       <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg float-right">Next</button>
    //     </Link>
    //   </div>
    // </div>
    <div class="grid grid-cols-2 divide-x">
      <div>
        <img className="top-2.5 left-2.5 w-1/6" src="logo-ministere.png" alt="logo-ministere"></img>
        <img className="w-1/3 m-auto" src="Marqueur.PNG" alt=""></img>
        <p className="text-center text-7xl">Visualisation <br /> des <span className="font-bold">usages</span></p>
      </div>
      <div className="bg-principal">
        <img className='mt-12 w-full' src="cahier.png" alt="cahier" />
        <p className="w-4/5 text-xl text-primary-content m-auto mt-8 pl-2 border-l border-primary-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to='/Usage'>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg float-right m-8">Next</button>
        </Link>
      </div>
    </div>
    

  )
}


export default Accueil;

