import Logo from "../../assets/logo.png";
import { links } from "../../Data";
import "./header.css";
const Header = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <div className="nav-menu">
          <ul className="nav-list container grid">
            <a
              href="https://www.linkedin.com/company/acm-sist-student-chapter/mycompany/"
              className="nav-logo"
            >
              <img src={Logo} alt="ACM-SIST" className="nav-logo-img" />
            </a>
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a href={path} className="navlink">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
