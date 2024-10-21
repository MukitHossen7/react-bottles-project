import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  console.log(bottles);
  return (
    <div className="pt-10">
      <h2 className="text-4xl font-bold ">
        All Data of Bottles : {bottles.length}
      </h2>
      <h3 className="pt-5 font-semibold text-2xl">Bottle : {cart.length}</h3>
      <div className="grid grid-cols-3 gap-5 pt-10">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleCart={handleCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
