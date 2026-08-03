import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";


const Contact = () => {

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "takshaya057@gmail.com",
      link: "mailto:takshaya057@gmail.com"
    },
    {
      icon: <FaEnvelope />,
      title: "Academic Email",
      value: "23211a05v2@bvrit.ac.in",
      link: "mailto:23211a05v2@bvrit.ac.in"
    },
    {
      icon: <FaEnvelope />,
      title: "Alternate Email",
      value: "23211a05v2@gmail.com",
      link: "mailto:23211a05v2@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 8317601566",
      link: "tel:+918317601566"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "tadisetti-akshaya",
      link: "https://www.linkedin.com/in/tadisetti-akshaya/"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "takshaya05",
      link: "https://github.com/takshaya05"
    }
  ];


  return (
    <section id="contact" className="contact section">


      <div className="contact-container">


        <div className="section-title">
          <h2>Contact</h2>
          <span></span>
        </div>



        <div className="contact-grid">


          {
            contactDetails.map((item,index)=>(

              <div className="contact-card" key={index}>


                <div className="contact-icon">
                  {item.icon}
                </div>


                <div>

                  <h3>
                    {item.title}
                  </h3>


                  {
                    item.link ? (

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>

                    ) : (

                      <p>
                        {item.value}
                      </p>

                    )
                  }


                </div>


              </div>

            ))
          }


        </div>


      </div>


    </section>
  );
};


export default Contact;