import Person from "../../../shared/Person";
import "./style.css";

function OurTeam() {
  return (
    <div className="ourTeam">
      <p className="title">OUR TEAM</p>
      <p className="heading">I'm a paragraph. Click here to add your</p>
      <p className="heading">own text and edit me.</p>
      <div className="d-f wrap">
        <Person
          name="DOMINICK JAMES"
          profesion="Founder and Principal"
          img="https://static.wixstatic.com/media/82fcd3_7a731101632e415bb8ab1f5a49c6145c~mv2.jpg/v1/crop/x_0,y_46,w_4278,h_3672/fill/w_370,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1181852767_CROP.jpg"
        />
        <Person
          name="GRACE RIOS"
          profesion="Project Manager"
          img="https://static.wixstatic.com/media/82fcd3_0e0ea1cfa3ec48e6993da72737082cac~mv2.jpg/v1/crop/x_0,y_155,w_1997,h_1716/fill/w_370,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1180037222_CROP.jpg"
        />
        <Person
          name="KIM BAILEY"
          profesion="VP Marketing"
          img="https://static.wixstatic.com/media/82fcd3_d5c1bcb10d674b44a5eecc753ffe4402~mv2.jpg/v1/crop/x_0,y_217,w_2863,h_2463/fill/w_370,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1097995030_CROP.jpg"
        />
        <Person
          name="TREVOR SINCLAIR"
          profesion="VP Accounts"
          img="https://static.wixstatic.com/media/82fcd3_b2d1feab6b884d71b13465b3d7265669~mv2.jpg/v1/crop/x_0,y_208,w_2261,h_1943/fill/w_370,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1180037247_CROP.jpg"
        />
      </div>
    </div>
  );
}

export default OurTeam;
