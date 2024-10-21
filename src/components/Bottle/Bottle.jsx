const Bottle = ({ bottle }) => {
  const { name, img, price } = bottle;
  return (
    <div className="flex flex-col items-center border-2 border-slate-700 rounded-xl p-10">
      <img className="w-40 rounded-md object-cover" src={img}></img>
      <h3 className="font-bold text-xl pt-4">Name : {name}</h3>
      <p className="font-bold pt-2">Price : {price}</p>
    </div>
  );
};

export default Bottle;
