import React from 'react';
import Alhambra_Prestige from '../../assets/For Web/svg/Color logo - no background.svg';

require('./vancances.scss');
function Partenaire() {
  return (
    <main className='vacances'>
      <section className='section-omra'>
        <a href="http://alhambra-prestige.fr">
          <div className="container">
            <div className="description">
                <h2>Alhambra Prestige</h2>
            </div>
            <div className="box">
              <img src={Alhambra_Prestige} alt="" srcSet=""/>
            </div>
          </div>
        </a>
      </section>
    </main>
  )
}

export default Partenaire;