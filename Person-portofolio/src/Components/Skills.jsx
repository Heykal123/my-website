import React from 'react'

export default function Skills() {
  return (
    <div id='Skills'>
      <main className="container">    
        <hr />
        {/* Section Skills */} 
        <section id="skill-section">
          <div className="headerSkill-head">
            <h2><span><br />Skills</span></h2><br /><br />
          </div>
          <div className="skillMain">
            <p>Network</p>
            <div className="skillBar">
              <div className="info" id="network">
              <p>90%</p>
              </div>
            </div>
            <p>PYTHON</p>
            <div className="skillBar">
              <div className="info" id="python">
              <p>85%</p>
              </div>
            </div>
            <p> PHOTOSHOP</p>
            <div className="skillBar">
              <div className="info" id="photoshop">
              <p>100%</p>
              </div>
            </div>
            <p>Advenced Java</p>
            <div className="skillBar">
              <div className="info">
              
              <p>99%</p>
              </div>
            </div>
          </div><br />
        </section><br />
     
      </main>
    </div>
  )
}