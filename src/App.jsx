import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Compo/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffee] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h1 className="text-center">
        Nabil er main dorbar e coffee ase {coffees.length}
      </h1>
      <label className="swap swap-flip text-9xl">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>
      <div className="grid md:grid-cols-2 gap-4 ">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffee={setCoffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
