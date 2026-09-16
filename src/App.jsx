import "./App.css";
import HeroSection from "./components/Title/HeroSection.jsx";
import ProjectCard from "./components/project/ProjectCard.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import HorizontalScrollContainer from "./components/HorizontalScrollContainer/HorizontalScrollContainer.jsx";
import CrackedBackground from "./components/CrackedBackground/CrackedBackground.jsx";

function App() {

  return (
    <>
<CrackedBackground />

      <header className="site-header"></header>


    <nav className="NavigationBar">
          <NavBar />
      </nav>

      <main className="site-main">


       <HeroSection>
        <HorizontalScrollContainer>
              <ProjectCard />
          </ HorizontalScrollContainer>
       </HeroSection>


      </main>

      <footer className="site-footer" />
    </>
  );
}

export default App;
