import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade, Flip } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div
              className="experience-heading-div"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div
                className="experience-heading-text-div"
                style={{ maxWidth: "600px" }}
              >
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience.subtitle}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>

          {/* Experience Cards */}
          <div style={{ padding: "2rem 1rem", width: "90%", margin: "0 auto" }}>
            {experience.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} style={{ marginBottom: "2rem" }}>
                <h2
                  style={{
                    color: theme.text,
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontSize: "40px",
                  }}
                >
                  {section.title}
                </h2>
                {section.experiences.map((exp, expIndex) => (
                  <div
                    className="degree-card"
                    key={expIndex}
                    style={{ marginBottom: "2rem" }}
                  >
                    {exp.logo_path && (
                      <Flip left duration={2000}>
                        <div className="card-img">
                          <img
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              transform: "scale(0.9)",
                            }}
                            src={require(`../../assets/images/${exp.logo_path}`)}
                            alt={exp.company}
                          />
                        </div>
                      </Flip>
                    )}
                    <Fade right duration={2000} distance="40px">
                      <div
                        className="card-body"
                        style={{ width: exp.logo_path ? "90%" : "100%" }}
                      >
                        <div
                          className="body-header"
                          style={{
                            backgroundColor: theme.headerColor,
                            padding: "1rem",
                            borderRadius: "8px",
                          }}
                        >
                          <div className="body-header-title">
                            <h2
                              className="card-title"
                              style={{ color: theme.text, margin: 0 }}
                            >
                              {exp.title}
                            </h2>
                            <h3
                              className="card-subtitle"
                              style={{ color: theme.text, margin: 0 }}
                            >
                              <a
                                href={exp.company_url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: theme.accentColor }}
                              >
                                {exp.company}
                              </a>
                            </h3>
                          </div>
                          <div className="body-header-duration">
                            <h3
                              className="duration"
                              style={{ color: theme.text, margin: 0 }}
                            >
                              {exp.duration} | {exp.location}
                            </h3>
                          </div>
                        </div>
                        <div
                          className="body-content"
                          style={{ marginTop: "1rem" }}
                        >
                          <p
                            className="content-list"
                            style={{ color: theme.secondaryText }}
                          >
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
