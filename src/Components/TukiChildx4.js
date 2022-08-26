import { useState, useEffect } from "react";

const TukiChildx4 = () => {
  const [animals, setAnimals] = useState(["Racoon"]);
  const array = ["Dog", "Cat", "Pikachu", "Winne Pooh", "Patricio"];

  const addAnimals = () => {
    if (animals.length < 6) {
      setAnimals([...animals, ...array]);
    }
  };

  const resetAnimals = () => {
    setAnimals(["Racoon"]);
  };

  useEffect(() => {
    console.log(animals);
  });

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
