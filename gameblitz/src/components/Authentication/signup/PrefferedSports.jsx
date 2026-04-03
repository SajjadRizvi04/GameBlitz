import { useEffect } from "react";
import "./PrefferedSports.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
import SpinLoader from "../utilities/helper components/SpinLoader/SpinLoader";
import { getRegisteredSports } from "../APIs/authentication.api";

export default function SportsSelector({ selectedSports, setSelectedSports }) {
    
    const [loading,setLoading] = useState(false);
     const [registeredSports, setRegisteredSports] = useState([]); 

   useEffect(()=>{
    // Fetch sports from server on component mount
    async function fetchSports() {
      setLoading(true);
      try {
        const sports = await getRegisteredSports();
        setRegisteredSports(sports);
      } catch (error) {
        console.error("Failed to fetch sports:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSports();
  },[])
  const toggleSport = (sportId) => {
    if (selectedSports.includes(sportId)) {
      setSelectedSports(selectedSports.filter((s) => s !== sportId));
    } else {
      setSelectedSports([...selectedSports, sportId]);
    }
  };
  if(loading || registeredSports.length === 0){
    return <SpinLoader />
  }
  return (
    <div className="sports-container">
      <h2>Select Your Interests</h2>

      <div className="sports-grid">
        {registeredSports.map((sport,i) => {
          const isSelected = selectedSports.includes(sport);

          return (
            <div
                key={i}
                className={`sport-card ${isSelected ? "selected" : ""}`}
                onClick={() => toggleSport(sport)}
                >
                <span className="sport-label">{sport}</span>

                {isSelected && (
                    <IoIosCheckmarkCircleOutline className="check-icon" />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}