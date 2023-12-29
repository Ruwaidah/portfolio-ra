import "./About.css";

const About = () => {
  return (
    <div
      className="About"
      style={{ position: "absolute", top: window.innerHeight }}
    >
      <div>
        <h2>About</h2>
        <p>
          {" "}
          I'm a dedicated mom of three wonderful kids, juggling the
          responsibilities of parenthood with a fulfilling career. I've been
          working full-time at Walmart as a Personal Shopper since 2022,
          ensuring that meet the client's preferences and requirements.
          responsible for selecting fresh produce, checking expiration dates,
          and making suitable replacements if certain items are out of stock.
          Beyond my job, I'm also passionate about technology and coding. My
          coding journey began in 2018, and I've since earned certifications in
          both Full Stack Development from BloomTech and Web Development from
          SpringBoard. These achievements reflect my commitment to expanding my
          skills and staying up-to-date in the ever-evolving world of web
          development.
        </p>
      </div>{" "}
    </div>
  );
};

export default About;
