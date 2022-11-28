import "../sass/App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const [initialState, setInitialState] = useState(null);
  const [loadState, setLoadState] = useState(false);

  const initialFetch = () => {
    setInitialState(null)
    setLoadState(true)
    fetch("https://picsum.photos/200/200")
      .then(res => setInitialState(res.url))
      .then(res => setLoadState(false))
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
          />
        </Routes>

        <h1>This is our Atlas Hackathon Project frontend</h1>
        <button onClick={initialFetch}>Fetch</button>
        <div>
          {initialState && <img src={initialState} />}
          {(loadState && !initialState) && <div className="loader"></div>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
