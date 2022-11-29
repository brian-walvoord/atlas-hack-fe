const Homepage = (props) => {
  const { 
    initialState, 
    setInitialState, 
    loadState, 
    setLoadState 
  } = props;

  const initialFetch = () => {
    setInitialState(null)
    setLoadState(true)
    fetch("https://picsum.photos/200/200")
      .then(res => setInitialState(res.url))
      .then(res => setLoadState(false))
  };

  return (
    <div>
      <h1>This is the homepage component.</h1>
      <h1>This is our Atlas Hackathon Project frontend</h1>
        <button onClick={initialFetch}>Fetch</button>
        <div>
          {initialState && <img src={initialState} />}
          {(loadState && !initialState) && <div className="loader"></div>}
        </div>
    </div>
  )
}

export default Homepage;