const Education = () => {
  return (
    <section id="education" className="education section">

      <div className="education-container">

        <div className="section-title">
          <h2>Education</h2>
          <span></span>
        </div>


        <div className="education-wrapper">


          <div className="education-card">

            <h3>
              B V Raju Institute of Technology
            </h3>

            <h4>
              Bachelor of Technology (B.Tech) - Computer Science and Engineering
            </h4>

            <p className="education-location">
              Narsapur, Telangana
            </p>

            <div className="education-details">
              <span>2023 – 2027</span>
              <span>CGPA: 9.15</span>
            </div>

          </div>



          <div className="education-card">

            <h3>
              Sri Chaitanya Jr Kalasala
            </h3>

            <h4>
              Telangana State Board of Intermediate Education (XI & XII)
            </h4>

            <p className="education-location">
              Kukatpally, Telangana
            </p>

            <div className="education-details">
              <span>2021 – 2023</span>
              <span>Percentage: 96.4%</span>
            </div>

          </div>



          <div className="education-card">

            <h3>
              Genesis International School
            </h3>

            <h4>
              Central Board of Secondary Education (X)
            </h4>

            <p className="education-location">
              Miyapur, Telangana
            </p>

            <div className="education-details">
              <span>2020 – 2021</span>
              <span>Percentage: 90.4%</span>
            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default Education;