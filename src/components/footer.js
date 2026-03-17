import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; {new Date().getFullYear()} {t('footer.copyright')}</div>
      {
        showTopBtn && (
          <button className="go-top" onClick={goTop} aria-label="Scroll to top"></button>
        )
      }
    </Container>
  )
}

export default AppFooter;