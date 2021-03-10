import React from 'react';
import './global.css';


export default function Header({children}){
    return(
        <header>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </header>
    );
}