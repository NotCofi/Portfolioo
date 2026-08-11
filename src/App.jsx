import "./App.css";
import TitleText from "./components/Title/TitleText.jsx";
import ProjectCard from "./components/project/ProjectCard.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
     <section className="NavigationBar">
          <NavBar />
      </section>
      <header className="site-header" />

      <main className="site-main">
        <section className="hero reveal-section">
          <TitleText />
        </section>

        <section className="projects reveal-section reveal-section--delayed">
          <div className="projects-grid">
            <ProjectCard />
          </div>
        </section>
      </main>

      <footer className="site-footer" />
    </>
  );
}

export default App;
