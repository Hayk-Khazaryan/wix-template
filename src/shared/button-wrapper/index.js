import "./style.css";

function ButtonWrapper({ className, name }) {
  return (
    <button className={`${className && className} defaultClass`}>{name}</button>
  );
}

export default ButtonWrapper;
