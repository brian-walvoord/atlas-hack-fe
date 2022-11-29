import "../sass/Homepage.scss";

const Homepage = (props) => {

  return (
    <div className="page">
      <div className="header-container">
        <h1 className="header">Welcome to the &lt;insert game name here&gt;</h1>
      </div>
      <div className="button-container">
        <button className="start-btn">Start your adventure!</button>
      </div>
    </div>
  )
}

export default Homepage;