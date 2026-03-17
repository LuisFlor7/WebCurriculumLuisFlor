import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useTranslation, Trans } from "react-i18next";
import "../AppAbout.css";
import img1 from "../assets/images/Lab.jpg";
import img2 from "../assets/images/Campo.jpg";
import img3 from "../assets/images/yoylenguajes.jpg";

function AppAbout() {
  const [activeSection, setActiveSection] = useState("scientific");
  const { t } = useTranslation();

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder animate-on-scroll">
          <h2>{t('about.title')}</h2>
          <div className="subtitle">{t('about.subtitle')}</div>
        </div>

        <div className="profile-toggle-container animate-on-scroll">
          <button
            className={`profile-toggle-btn ${activeSection === "scientific" ? "active" : ""}`}
            onClick={() => setActiveSection("scientific")}
          >
            <FontAwesomeIcon icon={faLeaf} /> {t('about.scientific_btn')}
          </button>
          <button
            className={`profile-toggle-btn ${activeSection === "tech" ? "active" : ""}`}
            onClick={() => setActiveSection("tech")}
          >
            <FontAwesomeIcon icon={faLaptop} /> {t('about.tech_btn')}
          </button>
        </div>

        <div className="fade-in" key={activeSection}>
          {activeSection === "scientific" && (
            <Row>
              <Col sm={6}>
                <p><Trans i18nKey="about.sci_p1" components={{ strong: <strong /> }} /></p>
                <p>{t('about.sci_p2')}</p>
                <p>{t('about.sci_p3')}</p>
              </Col>
              <Col sm={3}>
                <div className="img-wrapper">
                  <img src={img1} alt="Laboratory work" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="img-wrapper">
                  <img src={img2} alt="Field work" />
                </div>
              </Col>
            </Row>
          )}

          {activeSection === "tech" && (
            <Row>
              <Col sm={6}>
                <p><Trans i18nKey="about.tech_p1" components={{ strong: <strong /> }} /></p>
                <p>{t('about.tech_p2')}</p>
                <p>{t('about.tech_p3')}</p>
              </Col>
              <Col sm={6}>
                <div className="img-wrapper">
                  <img src={img3} alt="Programming languages" />
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
}

export default AppAbout;
