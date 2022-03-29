import ProfesionInfo from "../../shared/ProfesionInfo";
import "./style.css";

function ServicesWrapper() {
  return (
    <div className="servicesWrapper">
      <p className="title">SERVICES</p>
      <div className="profesionInfo-column">
        <ProfesionInfo
          money="220"
          hr="1 hr"
          profesion="PROJECT MANAGEMENT"
          img="https://static.wixstatic.com/media/82fcd3_0b475e3f9c2a4244aceaa58c1ca3c932~mv2.jpg/v1/fill/w_469,h_288,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/82fcd3_0b475e3f9c2a4244aceaa58c1ca3c932~mv2.webp"
        />
        <ProfesionInfo
          money="150"
          hr="1 hr"
          profesion="OPERATIONAL CONSULTING"
          img="https://static.wixstatic.com/media/82fcd3_ee75c9f1b8e7451cbbf134f22529874e~mv2.jpg/v1/fill/w_469,h_288,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/82fcd3_ee75c9f1b8e7451cbbf134f22529874e~mv2.webp"
        />
        <ProfesionInfo
          money="170"
          hr="1 hr"
          profesion="CORPORATE STRATEGY"
          img="https://static.wixstatic.com/media/82fcd3_e66f8029559c412da564aead8063cd76~mv2.jpg/v1/fill/w_469,h_288,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/82fcd3_e66f8029559c412da564aead8063cd76~mv2.webp"
        />
      </div>
    </div>
  );
}

export default ServicesWrapper;
