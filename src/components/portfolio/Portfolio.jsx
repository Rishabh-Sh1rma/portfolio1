import "./portfolio.css";

import IMG1 from "../../assets/img1.jpeg";
import IMG2 from "../../assets/img2.jpeg";
import IMG3 from "../../assets/img3.jpeg";
import IMG4 from "../../assets/img4.jpeg";
import IMG5 from "../../assets/img5.jpeg";
import IMG6 from "../../assets/img6.jpeg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "SPEND ORGANIZER (Finance App) | MERN Stack",
      img: IMG1,
      description:
        "implemented user authentication and a finance log to track expenses and savings.",
      technologies: "MERN Stack",
      link: "https://spend-organizer-final-frontend.onrender.com",
    },
    {
      id: 2,
      title: "EZTax- Tax Calculator |Java, NetBeans, MySQL",
      img: IMG4,
      description:
        "Built a Java app for tax calculation under 2022 and 2023 regimes",
      technologies: "Java, NetBeans, MySQL",
      link: "https://github.com/Rishabh-Sh1rma/network-tracker/",
    },
    {
      id: 3,
      title: "FRAVIT - Order from Your Favorite Shop",
      img: IMG2,
      description: "Developed a responsive web app connecting users with local shopkeepers.",
      technologies: "HTML, CSS, JavaScript, MySql",
      link: "https://fravit.infinityfreeapp.com/",
    },
    {
      id: 4,
      title: "ZOMBIE FPS GAME",
      img: IMG3,
      description:
        "Created a survival game featuring 30+ zombies and an immersive environment.",
      technologies: "Unity3D",
      link: "hhttps://github.com/Rishabh-Sh1rma/Zombie-survival-Game",
    },
    {
      id: 5,
      title: "TEAM-SPHERE",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Clerk authentication, Node, MySQL, Prisma",
      link: "https://chat-application-903o.onrender.com/",
    },
    {
      id: 6,
      title: "PARAGLIDING SIMULATION",
      img: IMG6,
      description:
        "Engineered a high-fidelity virtual reality paragliding simulation experience.",
      technologies: "Unreal Engine",
      link: "https://www.linkedin.com/posts/priyankamanwani_hello-connections-paragliding-activity-7057075441626419200-6fFc/?utm_source=share",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
