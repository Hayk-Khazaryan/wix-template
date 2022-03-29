import ButtonWrapper from "../../../shared/button-wrapper";
import "./style.css";

function AchievingGrowth() {
  return (
    <div className="achievingGrowth">
      <img
        alt=""
        className="img"
        src="https://static.wixstatic.com/media/82fcd3_47a465bb9c6f4b52a0cc83f281806af8~mv2.jpg/v1/fill/w_1551,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_47a465bb9c6f4b52a0cc83f281806af8~mv2.jpg"
      />
      <div className="developing-strategies">
        <p className="text">Developing Innovative Strategies</p>
        <p className="title">ACHIEVING GROWTH</p>
        <ButtonWrapper name="Book A Consultation" className={"book"} />
      </div>
    </div>
  );
}

export default AchievingGrowth;
