import multimodularpng_svg from '../assets/multimodularpng.svg';
import "./ProjectCard.css"

function ProjectCard() {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="icon-box">
           <img src={multimodularpng_svg} alt="project_card" id="project_cards"/>
          <div className="icon-placeholder" />
        </div>

        <h2>Multimodular<br />discord-bot</h2>

        <p>
          My first big project. it has regex-filtering with moderation-API
          to handle edge-cases.
        </p>

        <button>See More</button>
      </div>
    </div>
  );
}

export default ProjectCard;

