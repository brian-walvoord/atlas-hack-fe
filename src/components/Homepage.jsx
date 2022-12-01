import "../sass/Homepage.scss";
import { useNavigate } from "react-router-dom";

const Homepage = (props) => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/gamepage"
    navigate(path);
  }

  return (
    <div className="page">
      <div className="header-container">
        <h1 className="header">Welcome to the &lt;insert game name here&gt;</h1>
      </div>
      <div className="button-container">
        <button onClick={routeChange} className="start-btn">Start your adventure!</button>
      </div>
    </div>
  )
}

export default Homepage;