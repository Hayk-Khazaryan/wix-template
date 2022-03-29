import Person from "../../shared/Person";
import "./style.css";

function Projects() {
  return (
    <div className="projectsWrapper">
      <p className="title">PROJECTS</p>
      <div className="wrap">
        <Person
          name="PROJECT 1"
          img="https://static.wixstatic.com/media/82fcd3_f5b2e31b2f244bc6abb664c10a1d8bc4~mv2.jpg/v1/crop/x_0,y_157,w_5500,h_3353/fill/w_438,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1163568487.jpg"
        />
        <Person
          name="PROJECT 2"
          img="https://static.wixstatic.com/media/82fcd3_9a2239df57c946c485ee266996b123a5~mv2.jpg/v1/crop/x_1088,y_616,w_4412,h_2700/fill/w_438,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1180038900.jpg"
        />
        <Person
          name="PROJECT 3"
          img="https://static.wixstatic.com/media/82fcd3_279d841331e2451fa21f0e987ef4a325~mv2.jpg/v1/crop/x_0,y_54,w_2000,h_1224/fill/w_438,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1175414010.jpg"
        />
        <Person
          name="PROJECT 4"
          img="https://static.wixstatic.com/media/82fcd3_7eb8f2488b994e01aa6fa3ad938df939~mv2.jpg/v1/crop/x_0,y_319,w_6986,h_4274/fill/w_438,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1210182374.jpg"
        />
      </div>
    </div>
  );
}

export default Projects;
