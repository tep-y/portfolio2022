import React from "react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  let navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  }

  return(
    <nav>
      <input className="checkbox" type="checkbox" name="back" onClick={backHome}/>
      <div className="back-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </nav>
  )
}

export default Back;