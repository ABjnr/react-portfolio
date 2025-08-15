import Skills from "../Skills/Skills";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-wrapper">
        <h1 className="about-title">About Me</h1>
        <section className="about-section" aria-labelledby="intro">
          <h2 className="section-title">Introduction</h2>
          <p className="section-content">
            I'm Abraham Adeniyi, a backend web developer driven by curiosity,
            creativity, and a deep-rooted passion for solving real-world
            problems with technology.
          </p>
        </section>

        <Skills />

        <section className="about-section" aria-labelledby="lifestyle">
          <h2 className="section-title">Personal Interests</h2>
          <p className="section-content">
            Outside of coding, I enjoy watching movies, hanging out with
            friends, and diving into tech communities where I can learn from
            others and share ideas. These experiences fuel my adaptability and
            creativity, and they help me bring a well-rounded perspective to
            every project I work on.
          </p>
        </section>
        <section className="about-section" aria-labelledby="career">
          <h2 className="section-title">Career Motivation</h2>
          <p className="section-content">
            Choosing backend development wasn't just about the code, it was
            about finding a career where my analytical mindset, desire to help
            others, and love of technology could intersect. Whether I'm building
            a task management app for students or architecting cloud-first
            applications, I'm all about creating tools that simplify life and
            scale with purpose.
          </p>
        </section>

        <section
          className="about-section gallery-section"
          aria-labelledby="gallery"
        >
          <h2 className="section-title">Gallery</h2>
          <div
            className="gallery-grid"
            role="group"
            aria-label="Photo gallery of Abraham"
          >
            <img
              className="gallery-image"
              src="images/image1.jpg"
              alt="Abraham in front of a mirror"
            />
            <img
              className="gallery-image"
              src="images/image3.jpg"
              alt="Abraham sitting in front of a mirror"
            />
            <img
              className="gallery-image"
              src="images/image2.jpg"
              alt="A selfie of Abraham in a field"
            />
          </div>
        </section>
      </div>
    </>
  );
}
