import React from 'react';
import { NavLink } from 'react-router-dom';

require('./hero.scss');

const Hero = () => (
    <section className='hero'>
      <NavLink to='/pellerinage-hajj'>
        <div className="box hero_hajj">Hajj</div>
      </NavLink>
      <NavLink to='/pellerinage-omra'>
        <div className="box hero_omra">Omra</div>
      </NavLink>
      <NavLink to='/pellerinage-combinés'>
        <div className="box hero_combine">Combinés</div>
      </NavLink>
      <NavLink to='/billetterie'>
        <div className="box hero_billeterie" id='black'>
            Billeterie
            <span>Afrique-Maghreb</span>
          </div>
      </NavLink>
      <NavLink to='/vacances'>
        <div className="box hero_combine" id='black'>Vacances</div>
      </NavLink>
      <NavLink to='/partenaires'>
        <div className="box hero_combine" id='black'>Partenaires</div>
      </NavLink>
    </section>
)

export default Hero;
