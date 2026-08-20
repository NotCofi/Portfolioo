import "./App.css";
import HeroSection from "./components/Title/HeroSection.jsx";
import ProjectCard from "./components/project/ProjectCard.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>

      <header className="site-header" />

      <main className="site-main">
          <nav className="NavigationBar">
          <NavBar />
      </nav>


       <HeroSection>
           <ProjectCard />
       </HeroSection>


      </main>

      <footer className="site-footer" />
    </>
  );
}

export default App;
