import React from 'react'
import abu_dhabi from '../../assets/hero/abu_dhabi_first.jpeg';

require('./omra.scss');
function Omra() {
  return (
    <main>
      <section className='section-omra'>
      <div className="container">
      <div className="description">
            <h2>Omra 2022</h2>
            <p className='tarif'>Période à déterminer/Tarifs à venir</p>
        </div>
        <div className="box">
          <img src={abu_dhabi} alt="" srcSet=""/>
        </div>
      </div>
      <div className="container">
      <div className="description">
            <h2>Omra Ramadan 2022</h2>
            <p className='tarif'>Période à déterminer/Tarifs à venir</p>
        </div>
        <div className="box">
          <img src={abu_dhabi} alt="" srcSet=""/>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Omra;
