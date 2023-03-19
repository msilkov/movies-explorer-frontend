import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import './Main.css'

export default function Main({className}){
  return(
    <main className={`${className.main} main`}>
      <Promo className={className} />
      <AboutProject/>
    </main>
  )
}