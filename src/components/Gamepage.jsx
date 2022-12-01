import "../sass/Gamepage.scss";
import { useNavigate } from "react-router-dom";

const Gamepage = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/"
    navigate(path);
  }
  return (
    <div>
      <h2 className="back-btn" onClick={routeChange}>Go Back</h2>
      <div className="game-container">
        <h1>This is the Gamepage component.</h1>
        <img className="wagon-gif" alt="wagon gif" src="https://i.redd.it/o0od47n48c3y.gif" />
      </div>
    </div>
  )
}

export default Gamepage;