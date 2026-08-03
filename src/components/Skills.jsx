const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      items: "Python, Java, C"
    },
    {
      title: "Web Development",
      items: "HTML, CSS, JavaScript, React.js, Node.js"
    },
    {
      title: "AI / ML / Cloud",
      items: "Artificial Intelligence, Machine Learning, Cloud Fundamentals"
    },
    {
      title: "Databases",
      items: "MySQL, MongoDB"
    },
    {
      title: "Platforms & Tools",
      items: "GitHub, VS Code, Google Colab"
    },
    {
      title: "Soft Skills",
      items: "Leadership, Adaptability, Responsibility, Communication, Presentation"
    }
  ];


  return (
    <section id="skills" className="skills section">

      <div className="skills-container">


        <div className="section-title">
          <h2>Skills</h2>
          <span></span>
        </div>



        <div className="skills-grid">

          {
            skills.map((skill,index)=>(
              <div className="skill-card" key={index}>

                <h3>
                  {skill.title}
                </h3>

                <p>
                  {skill.items}
                </p>

              </div>
            ))
          }

        </div>


      </div>

    </section>
  );
};


export default Skills;