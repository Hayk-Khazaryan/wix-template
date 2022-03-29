import "./style.css";
import ButtonWrapper from "../button-wrapper";

function Paragraph({ title }) {
  return (
    <div className="paragraph">
      <p className="title">{title}</p>
      <p className="text">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </p>
      <ButtonWrapper name="More Info" className="info" />
    </div>
  );
}

export default Paragraph;
