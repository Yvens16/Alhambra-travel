import React from 'react'
import mecca from '../../assets/hero/mecca_xlarge.jpeg';

require('./hajj.scss');
function Hajj() {
  return (
    <main className='section-hajj'>
      <div className="container">
      <div className="description">
            <h2>Hajj long séjour 2022</h2>
            <p>Chambre double</p>
            <p className='tarif'>Tarif à venir</p>
        </div>
        <div className="box">
          <img src={mecca} alt="" srcSet=""/>
        </div>
      </div>
      <div className="container">
      <div className="description">
            <h2>Hajj long séjour 2022</h2>
            <p>Chambre triple</p>
            <p className='tarif'>Tarif à venir</p>
        </div>
        <div className="box">
          <img src={mecca} alt="" srcSet=""/>
        </div>
      </div>
      <div className="container">
      <div className="description">
            <h2>Hajj long séjour 2022</h2>
            <p>Chambre quadruple</p>
            <p className='tarif'>Tarif à venir</p>
          </div>
        <div className="box">
          <img src={mecca} alt="" srcSet=""/>
        </div>
      </div>
    </main>
  )
}

export default Hajj;
