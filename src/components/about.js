import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useTranslation, Trans } from "react-i18next";
import "../AppAbout.css";

function AppAbout() {
  /* Default to tech profile */
  const [activeSection, setActiveSection] = useState("tech");
  const { t } = useTranslation();

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder animate-on-scroll">
          <h2>{t('about.title')}</h2>
          <div className="subtitle">{t('about.subtitle')}</div>
        </div>

        {/* Profile toggle — tech first (default) */}
        <div className="profile-toggle-container animate-on-scroll">
          <button
            className={`profile-toggle-btn ${activeSection === "tech" ? "active" : ""}`}
            onClick={() => setActiveSection("tech")}
          >
            <FontAwesomeIcon icon={faLaptop} /> {t('about.tech_btn')}
          </button>
          <button
            className={`profile-toggle-btn ${activeSection === "scientific" ? "active" : ""}`}
            onClick={() => setActiveSection("scientific")}
          >
            <FontAwesomeIcon icon={faLeaf} /> {t('about.scientific_btn')}
          </button>
        </div>

        {/* Full-width text layout (images removed) */}
        <div className="about-content fade-in" key={activeSection}>
          {activeSection === "scientific" && (
            <div className="about-text-panel">
              <p className="about-lead"><Trans i18nKey="about.sci_p1" components={{ strong: <strong /> }} /></p>
              <p>{t('about.sci_p2')}</p>
              <p>{t('about.sci_p3')}</p>
            </div>
          )}

          {activeSection === "tech" && (
            <div className="about-text-panel">
              <p className="about-lead"><Trans i18nKey="about.tech_p1" components={{ strong: <strong /> }} /></p>
              <p>{t('about.tech_p2')}</p>
              <p>{t('about.tech_p3')}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default AppAbout;
