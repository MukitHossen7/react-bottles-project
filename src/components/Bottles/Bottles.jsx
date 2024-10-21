import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  console.log(bottles);
  return (
    <div className="pt-10">
      <h2 className="text-4xl font-bold ">
        All Data of Bottles : {bottles.length}
      </h2>
      <div className="grid grid-cols-3 gap-5 pt-10">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
