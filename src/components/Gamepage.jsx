import "../sass/Gamepage.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Gamepage = () => {

  const [housing, setHousing] = useState(null)

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/"
    navigate(path);
  }

  const sendRequest = () => {
    fetch("/testme")
      .then(res => res.json())
      .then(res => setHousing(JSON.stringify(res)))
  };

  return (
    <div>
      <h2 className="back-btn" onClick={routeChange}>Go Back</h2>
      <div className="game-container">
        <h1>This is the Gamepage component.</h1>
        <img className="wagon-gif" alt="wagon gif" src="https://i.redd.it/o0od47n48c3y.gif" />
      </div>
      <button className="test-btn" onClick={sendRequest}>Get Airbnb to start your journey</button>
      {housing && <p className="test-text">{housing}</p>}
    </div>
  )
}

export default Gamepage;