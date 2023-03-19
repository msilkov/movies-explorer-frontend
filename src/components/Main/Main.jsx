import React from 'react';
import Promo from '../Promo/Promo';
import './Main.css'

export default function Main({className}){
  return(
    <main className={`${className.main} main`}>
      <Promo className={className} />
    </main>
  )
}