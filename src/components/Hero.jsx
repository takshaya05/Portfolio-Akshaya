import profile from "../assets/Photo.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        <div className="hero-content">
          <h1>TADISETTI AKSHAYA</h1>
          <h2>B.Tech Computer Science and Engineering</h2>
          <p>
            Strong interest in Artificial Intelligence, Machine Learning, and Full Stack Development,
            with a passion for building innovative and impactful technology solutions.
          </p>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Tadisetti Akshaya" />
        </div>

      </div>

    </section>
  );
};

export default Hero;