import "./NavBar.css";

const NavBar = () => {
  const nextPage = (page) => {
    switch (page) {
      case "home":
        return window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      case "about":
        return window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      case "projects":
        return window.scrollTo({
          top: window.innerHeight * 2,
          behavior: "smooth",
        });
      case "contact":
        return window.scrollTo({
          top: window.innerHeight * 3,
          behavior: "smooth",
        });
    }
  };
  return (
    <div className="NavBar">
      <button className="next-back-btn" onClick={() => nextPage("home")}>
        Home
      </button>
      <button className="next-back-btn" onClick={() => nextPage("about")}>
        About
      </button>
      <button className="next-back-btn" onClick={() => nextPage("projects")}>
        Projects
      </button>
      <button className="next-back-btn" onClick={() => nextPage("contact")}>
        Contact
      </button>
    </div>
  );
};

export default NavBar;
