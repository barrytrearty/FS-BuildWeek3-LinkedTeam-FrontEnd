import { Button } from "react-bootstrap";
import "./ShowButton.css";
import { IoIosArrowDown } from "react-icons/io";

const ShowButton = ({show, setShow}) => {
      return (   <div className="text-center ShowDiv">
      <Button
        type="button"
        variant="outline-secondary"
        className="ShowMoreButton"
        onClick={() => setShow({show : !show})}
      >
        Show More <IoIosArrowDown />
      </Button>
    </div>)

};
export default ShowButton;
