import React, { useState } from 'react'

import { CContainer, CRow, CCol } from '@coreui/react'

import LatestHighlights from '../user/home/components/LatestHighlights'
import NewsAndEvents from '../user/home/components/NewsAndEvents'
import LatestCirculars from '../user/home/components/LatestCirculars'

function About() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


const send =()=>{
  alert("Form submitted by " + name)
}




  return (
    <div className="body flex-grow-1 custom-wrapper">
      <div>
        <CContainer>
          <CRow>
            <CCol md={9}>
              <br />
              <h3>About Us</h3>

              <br />

              <p className="lead">
                The University Grants Commission (UGC) is the apex body of the University System in
                Sri Lanka which was established on 22nd December 1978 under the Universities Act No.
                16 of 1978. The functions of the UGC are; planning and coordination of university
                education, allocation of funds to Higher Educational Institutions (HEIs),
                maintenance of academic standards, regulation of the administration of HEIs and
                regulation of admission of students to HEIs.{' '}
              </p>

              <br />

              <h5>Our Vision</h5>
              <p className="lead">
                <b>"Provide Knowledge Leadership for a Better Sri Lanka / World."</b>
              </p>

              <br />

              <h5>Our Mission</h5>
              <p className="lead">
                To foster management and good governance in facilitating the provision of
                undergraduate, postgraduate and professional education of highest quality with high
                impact research, quality teaching and industry engagement through a coordinated
                system of State Universities and HEIs, to create knowledge leaders who are
                passionate about meeting the triple bottom line.
              </p>

              <br />

              <h3>Contact Us</h3>
              <br />

              <h5><u>Our Contact Info</u></h5>
              <br />

              <address>
                <strong>Email: ugcadministrator@gmail.com</strong>
                <br />
                <br />
                <p>
                  <strong>Phone: +94 11 123 4567</strong>
                </p>
              </address>
              <hr />

              <h5>Get in touch with us.</h5>

              <CRow>
                <CCol md={8}>
                  <div>
                    <form >
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />

                      <br />

                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <br />

                      <textarea
                        className="form-control "
                        id="message"
                        name="message"
                        placeholder="message"
                        rows="5"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>

                      <br />

                      <button className="btn btn-dark" type="submit" onClick={send}>
                        Send
                      </button>
                    </form>
                  </div>
                </CCol>
              </CRow>

              <br />
            </CCol>

            <CCol md={3}>
              {/* Latest Highlights */}
              <LatestHighlights />

              {/* News and Events */}
              <NewsAndEvents />

              {/* Latest Circulars */}
              <LatestCirculars />
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  )
}

export default About
