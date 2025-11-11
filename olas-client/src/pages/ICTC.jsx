import React from 'react';
import '../styles/Graduate.css';
import logo from '../assets/images/ictc.png';

const ICTC = () => {
  return (
    <main className="container py-1">
      <section className="content-section">
        <div className="flex items-center gap-6 mb-6">
          {/* Use site logo as fallback for ICTC logo */}
          <img src={logo} alt="ICTC - Pastoral Department logo" style={{width:120,height:120,objectFit:'contain'}} />
          <div>
            <h1>ICTC - Pastoral Department</h1>
            <p className="mt-2 text-muted">Institute for Congregational Theological Center — Pastoral Formation</p>
          </div>
        </div>
        <main className="container py-12">

        <article>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">ICTC Hymn</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded mt-2 mb-6" aria-hidden></div>
          <div className="prose prose-lg mt-4 mx-auto text-center max-w-2xl space-y-6 leading-relaxed">
            <p>
              Tatak ICTC, Tatak Pastoral
              Hangaring isabuhay halimbawa't aral
              Ng Mabuting Pastol na sarili'y inalay
              Upang ang kawang pagod at lupaypay,
              Maakay sa buhay na ganap at may saysay.
            </p>

            <p>
              Tatak ICTC, tatak pastoral
              Sa Teyolohiyang sa baya'y nakikilakbay
              kaisipa't damdamin nati'y hinuhubog, pinapanday
              Marunong makinig, marunong dumama
              Kaisa ng sambayanang dukha't nagdurusa.
            </p>

            <p>
              Kaisa sa pangarap at katuwang sa pagkilos
              tungo sa buhay na para sa lahat ay nais ng Diyos.
            </p>

            <p>
              Tatak ICTC, Tatak Pastoral
              Tatak pastoral na espiritwalidad
              Na sa karanasa'y malalim na nakaugat
              Nagmamasid, nagninilay, kumikilos.
            </p>

            <p>
              Paligid at pangyayari'y tinatasa sa mata ng pananampalataya at Salita ng Diyos tungo sa panlipunang pagbabago.
              Sa pagsambang may lakip na pakikibaka. Naririnig ang hinaing ng dukha at ng daigdig.
            </p>

            <p>
              Tatak pastoral Pagmamahal sa kawan
              Pakikiisa sa sambayanan kapayapaa't katarungan.
              Ito ang ating tatak, Tatak patoral, Tatak pastoral, Tatak ICTC, tatak pastoral,
            </p>

            <p>
              Para sa paghahari ng Poong Maykapal!
            </p>
          </div>
        </article>
        </main>
      </section>
    </main>
    
  );
};

export default ICTC;
