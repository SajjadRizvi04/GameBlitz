import React from "react";
import SportsCard from "../../shared/SportsCard";


function Sports() {
  const sports = [
    {
      name: "Football",
      img: "/football.jpeg",
      desc: "Fast-paced team sport focused on goals, passing, and strategy.",
    },
    {
      name: "Cricket",
      img: "/cricket.jpeg",
      desc: "Bat-and-ball game played between two teams with tactical gameplay.",
    },
    {
      name: "Basketball",
      img: "/basketball.jpeg",
      desc: "High-energy sport where players score by shooting into the hoop.",
    },
    {
      name: "Badminton",
      img: "/badminton.jpeg",
      desc: "Quick indoor sport played using rackets and a shuttlecock.",
    },
  ];

  return (
    <div className="w-full my-8">
      <div className="  w-[80%] mx-auto my-12">
        <h2 className="text-4xl font-bold  my-8 text-(--orange)">
          Supported Sports
        </h2>

        {/* Cards */}
        <div className="flex gap-12 overflow-x-auto pb-8">
          {sports.map((sport, index) => (
            <SportsCard
              key={index}
              name={sport.name}
              image={sport.img}
              description={sport.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sports;
