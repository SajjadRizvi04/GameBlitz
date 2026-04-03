import "./PrefferedSports.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const SPORTS = [
  { id: "soccer", label: "Soccer" },
  { id: "basketball", label: "Basketball" },
  { id: "cricket", label: "Cricket" },
  { id: "volleyball", label: "Volleyball" },
];

export default function SportsSelector({registeredSports, selectedSports, setSelectedSports }) {
  
  const toggleSport = (sportId) => {
    if (selectedSports.includes(sportId)) {
      setSelectedSports(selectedSports.filter((s) => s !== sportId));
    } else {
      setSelectedSports([...selectedSports, sportId]);
    }
  };

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