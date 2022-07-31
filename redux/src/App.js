import { useState } from "react";
import "./app.css";

const App = () => {
  const [change, setChange] = useState(false);
  return (
    <div className="nav">
      <div>A</div>
      <button className = {`${change ? "green": ""}`} onClick={() => setChange((state) => !state)}>da</button>
      <p>{change ? "Teacher mode" : "student mode"}</p>
    </div>
  );
};
export default App;
