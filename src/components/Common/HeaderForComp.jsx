import "./HeaderForComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const HeaderForComp = ({ title }) => {
  return (
    <div className="headercomp">
      <FontAwesomeIcon icon={faCoffee} />
      <span className="spandata">{title}</span>
    </div>
  );
};
