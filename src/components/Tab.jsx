import React from "react";
import { Link } from "react-router-dom";

function Tab(){

    return(
        <div className="text-xl pt-10 font-medium text-center text-gray-500 dark:text-gray-500 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px justify-center">          
          <Link to='/'>
            <li className="mr-2">
              <a className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-principal hover:border-principal dark:hover:text-gray-700">Accueil</a>
            </li> 
          </Link>
          <Link to='/Usage'>
            <li className="mr-2">
              <a className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-principal hover:border-principal dark:hover:text-gray-700 active" aria-current="page">Usage</a>
            </li>
          </Link>
          <Link to='/Reseaux'>
            <li className="mr-2">
              <a className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-principal hover:border-principal dark:hover:text-gray-700">Réseaux</a>
            </li> 
          </Link>
        </ul>
      </div>
    )
}

export default Tab;

