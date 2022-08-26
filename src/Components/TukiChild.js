import { useState } from "react";

const TukiChild = () => {
  const [count, setCount] = useState(0);
  console.log("hijo ");

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3 className="countName"> El contador es {count}</h3>
      <button className="glow-on-hover" onClick={increase}>
        Increse
      </button>
      <button className="glow-on-hover" onClick={decrease}>
        Decrease
      </button>
      <button className="glow-on-hover" onClick={reset}>
        Reset!
      </button>
    </div>
  );
};

export default TukiChild;
