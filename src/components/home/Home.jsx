import "./home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-page">
        <div className="home-container">
          <div className="heading-container">
            <p className="heading">Welcome to </p>
            <br />
            <p className="heading-acm">ACM-SIST</p>
          </div>
          <div className="button-container">
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
