import React from 'react'
import '../styles/aem-grid.css';
export default function Title({name, title}) {
    return (
        <div className="aem-Grid  aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--12 my-2 pagetext-center text-title">
                {/* <h1 className="text-capitalize font-weght-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </h1> */}
                 <div id="master_site_wrapper">
      <main role="main">
        <div className="container-fluid no-padding">
          <section className="no-padding" id="destination-masthead">

            <div id="masthead_wrapper" className="aem-GridColumn aem-GridColumn--default--12">
              <div className="masthead-content-wrapper">
                <div className="destinations-section-wrapper green">
                <div className="masthead-content">
                  <div className="title-container">
                    <h2 className="title">Women's</h2>
                    <div className='title_hr'></div>
                  </div>
                </div>
                </div>
               
              </div>
            </div> 
            
          </section>
        </div>
      </main>
    </div>
            </div>
        </div>
    )
}
