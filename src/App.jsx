import "./App.css";
import TitleText from "./components/Title/TitleText.jsx";
import ProjectCard from "./components/project/ProjectCard.jsx";

function App() {
  return (
    <>
      <header className="site-header" />

      <main className="site-main">
        <section className="hero">
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
