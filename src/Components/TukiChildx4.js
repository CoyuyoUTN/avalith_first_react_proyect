import { useState } from "react";

const TukiChildx4 = () => {
  const [animals, setAnimals] = useState(["Racoon"]);

  const addAnimals = () => {
    console.clear();
    const array = ["Dog", "Cat", "Pikachu", "Winne Pooh", "Patricio"];
    setAnimals(["Racoon"]);
    setAnimals((animals) => animals.concat(array));
  };

  const resetAnimals = () => {
    console.clear();
    setAnimals(["Racoon"]);
  };
  console.log(animals);
  return (
    <div>
      <h2 className="countName"> Animals</h2>
      <button className="glow-on-hover" onClick={addAnimals}>
        Add animals
      </button>
      <button className="glow-on-hover" onClick={resetAnimals}>
        Reset animals
      </button>
    </div>
  );
};

export default TukiChildx4;
