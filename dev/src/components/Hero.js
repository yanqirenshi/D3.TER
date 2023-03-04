import React from 'react';
import { useLocation } from "react-router-dom";

// import HeroNavbar from './HeroNavbar.js';
import HeroTabs from './HeroTabs.js';

function Hero(props) {
    const tabs = props.tabs;

    const code = new URLSearchParams(useLocation().search).get('tab');
    const tab = tabs.find(d=>d.code===code) || tabs[0];

    return (
        <section className="hero is-primary is-medium" style={{background:'#19448e'}}>
          {/* <div className="hero-head"> */}
          {/*   <HeroNavbar /> */}
          {/* </div> */}

          <div className="hero-body" style={{padding: '22px 0px 22px 0px'}}>
            <div className="container has-text-centered">
              <h1 className="title">
                D3.TER
              </h1>
              {/* <h2 className="subtitle"> */}
              {/*   Subtitle */}
              {/* </h2> */}
            </div>
          </div>

          <div className="hero-foot">
            <HeroTabs tabs={tabs} tab={tab} />
          </div>
        </section>
    );
}

export default Hero;
