import React, { useState } from "react";
import JoinTeam from "./JoinTeam";
import CreateTeam from "./CreateTeam";
import "./LandingNoTeam.css";

function LandingNoTeam() {
  const [joinTeam, setJoinTeam] = useState(false);
//   const [createTeam, setCreateTeam] = useState(false);
  const [toggleView, setToggleView] = useState(0);

  return (
    <div className="noteam-wrapper">
      {toggleView === 0 ? (
        <div>
          <div className="noteam-header">
            <h1 className="noteam-title">Welcome to GameBlitz</h1>
            <p className="noteam-subtitle">
              GameBlitz is a local sports community platform that connects
              players and teams, making it effortless to find games, join teams,
              and compete in your area.
            </p>
          </div>

          <div className="noteam-message">
            <p>You don't have a team yet. What would you like to do?</p>

            <div className="or-container">
              <button className="action-btn" onClick={() => setToggleView(1)}>
                Join a Team
              </button>

              <span className="or-text">OR</span>

              <button className="action-btn" onClick={() => setToggleView(-1)}>
                Create a Team
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-wrapper">
          {toggleView === 1 ? <JoinTeam setToggleView={setToggleView} /> : <CreateTeam  setToggleView={setToggleView} />}
        </div>
      )}
    </div>
  );
}

export default LandingNoTeam;
