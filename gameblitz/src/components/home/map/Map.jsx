import React from "react";

function Map() {
  return (
    <div className="mt-18 pb-8 bg-transparent">
      <div className="flex w-[80%] mx-auto justify-between flex-wrap">
        <div className="w-136 h-80  rounded-xl flex flex-col justify-between">
          <div>
            <h3 className="text-4xl text-(--orange) font-bold">Find Matches Near You</h3>
            <h3 className="text-4xl  font-bold mb-2">Map & Search</h3>
            <p className="text-(--text-grey)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nisi numquam modi ullam praesentium nobis architecto,
              accusantium officiis.
            </p>
          </div>
          <div className="">
            <h3 className="text-lg font-medium">Map & Search</h3>
            <div className="flex mt-4 gap-1">
                <input type="text" placeholder="Find the matches" className="border h-12 px-4 rounded-md w-full"/>
                <button className="bg-(--orange) pl-5 pr-5 p-2 ml-2 rounded-lg hover:bg-orange-500 bg">Search</button>
            </div>
          </div>
        </div>
        <div className=" w-136 h-80 rounded-xl">
            <img src="/map.png" alt="" className="h-full object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  );
}

export default Map;
