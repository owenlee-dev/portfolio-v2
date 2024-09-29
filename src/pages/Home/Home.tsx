import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <section className="Home">
      <h1>Hi, I'm John Doe</h1>
      <p>I'm a Full-Stack Developer specializing in React and Node.js.</p>
      <Link to="/projects" className="cta-button">
        View My Projects
      </Link>
    </section>
  );
};
export default Home;
