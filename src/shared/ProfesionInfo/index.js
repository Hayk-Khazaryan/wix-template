import ButtonWrapper from "../button-wrapper";
import "./style.css";

function ProfesionInfo({ profesion, hr, money, img }) {
  return (
    <div className="profesionInfo">
      <img src={img} alt="" />
      <div className="profesion-button">
        <p className="profesion">{profesion}</p>
        <p className="hr">{hr}</p>
        <p className="money">${money}</p>
        <ButtonWrapper name="Book Now" className="book-now" />
      </div>
    </div>
  );
}

export default ProfesionInfo;
