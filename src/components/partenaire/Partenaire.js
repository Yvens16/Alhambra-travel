import React from 'react';
import fondation from '../../assets/hero/logo_fondation.png';

require('./partenaire.scss');
function Partenaire() {
  return (
    <main className='partenaires'>
      <section className='section-omra'>
        <a href="https://www.mahealthfoundation.org/">
          <div className="container">
            <div className="description">
                <h2>Maghreb American Health Foundation</h2>
            </div>
            <div className="box">
              <img src={fondation} alt="" srcSet=""/>
            </div>
          </div>
        </a>
      </section>
    </main>
  )
}

export default Partenaire;
