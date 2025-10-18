import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faLaptop } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/images/vino (1).jpg";
import img2 from "../assets/images/vino (3).jpg";
import img3 from "../assets/images/vino (2).jpg";
import img4 from "../assets/images/vino (4).jpg";

function AppAbout() {
  const [activeSection, setActiveSection] = useState("scientific");

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About</h2>
          <div className="subtitle">A continuous learning</div>
        </div>

        {/* 🔹 Botones para cambiar contenido */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Button
            variant={
              activeSection === "scientific" ? "success" : "outline-success"
            }
            onClick={() => setActiveSection("scientific")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "bold",
            }}
          >
            <FontAwesomeIcon icon={faLeaf} /> Scientific Profile
          </Button>

          <Button
            variant={activeSection === "tech" ? "primary" : "outline-primary"}
            onClick={() => setActiveSection("tech")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "bold",
            }}
          >
            <FontAwesomeIcon icon={faLaptop} /> Tech Profile
          </Button>
        </div>

        {/* 🔹 Contenido dinámico */}
        <div className="fade-in">
          {activeSection === "scientific" && (
            <Row>
              <Col sm={3}>
                <Image style={{ height: "360px" }} src={img1} />
              </Col>
              <Col sm={3}>
                <Image style={{ height: "360px" }} src={img2} />
              </Col>
              <Col sm={6}>
                <p>
                  <strong>Luis Flor</strong> is a biologist from Jerez de la
                  Frontera, Spain, specialized in{" "}
                  <strong>grapevine physiology under drought conditions</strong>
                  .
                </p>
                <p>
                  Since graduating from the University of the Balearic Islands,
                  he has spent several years conducting research in the field of
                  grapevine physiology under water-limited conditions. His work
                  has focused on comparing the physiological responses of
                  different genotypes, including emblematic Spanish varieties
                  such as Tempranillo, and Garnacha, grafted onto well-known
                  commercial rootstocks such as 110R and 140Ru, as well as newly
                  developed hybrids.
                </p>
                <p>
                  He has published scientific articles in high-impact journals,
                  several of which have been recognized as Highly Cited
                  Articles. His studies have contributed to a deeper
                  understanding of the vulnerability of the grapevine vascular
                  system to drought.
                </p>
              </Col>
            </Row>
          )}

          {activeSection === "tech" && (
            <Row>
              <Col sm={6}>
                <p>
                  <strong>Luis Flor</strong> is a full-stack developer and data
                  analyst from Jerez de la Frontera, Spain, specializing in{" "}
                  <strong>
                    front-end and back-end web and app development.
                  </strong>
                </p>
                <p>
                  Since graduating from 4Geeks Academy, he has dedicated several
                  years to advancing his expertise in full-stack development and
                  data analysis. His work has focused on building dynamic and
                  responsive applications using front-end technologies such as
                  JavaScript, React, CSS, HTML, and Next.js, as well as back-end
                  frameworks including SQL, SQLite, and Flask. In addition, Luis
                  has combined his scientific background with his analytical
                  skills through the use of RStudio for data analysis and
                  visualization.{" "}
                </p>
                <p>
                  He is currently expanding his knowledge in artificial
                  intelligence development, integrating AI-driven tools and
                  methodologies into his programming and analytical workflows.{" "}
                </p>
              </Col>
                <Col sm={3}>
                <Image style={{ height: "360px" }} src={img1} />
              </Col>
              <Col sm={3}>
                <Image style={{ height: "360px" }} src={img2} />
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
}

export default AppAbout;
