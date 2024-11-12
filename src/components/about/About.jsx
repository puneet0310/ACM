import "../about/about.css";
import aboutImg from "../../assets/group.jpg";
import { FiCheck } from "react-icons/fi";
import { BiSolidChevronDown } from "react-icons/bi";
const About = () => {
  return (
    <section className="abt-section" id="about">
      <div className="about-grid container grid">
        <div className="about-img-wrapper">
          <img src={aboutImg} alt="" className="about-img" />
        </div>
        <div className="about-content">
          <h1 className="section-title">About Us</h1>
          <h2 className="section-subtitle" data-title="About Us">
            Empowering students in tech, collaboration, and innovation.
          </h2>
          <p className="about-description">
            ACM Student Chapter at SIST connects passionate students in computer
            science, offering hands-on workshops, industry insights, and a
            collaborative community to drive innovation and tech skills forward.
          </p>
          <div className="about-details">
            <p className="about-details-description">
              <BiSolidChevronDown />
              Skill Growth Hands-on projects to boost your technical expertise.
            </p>
            <p className="about-details-description">
              <BiSolidChevronDown />
              Networking Connect with peers and alumni for mentorship and career
              paths.
            </p>
            <p className="about-details-description">
              <BiSolidChevronDown />
              Community Join a creative tech community focused on collaboration
            </p>
          </div>
          <a href="#team" className="btn">
            Our Team
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
