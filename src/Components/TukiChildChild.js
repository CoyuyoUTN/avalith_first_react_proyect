import { useState } from "react";

const TukiChildChild = () => {
  const [info, setInfo] = useState({ name: "Coyuyo", age: 31 });
  console.log(info);

  const changeData = () => {
    setInfo({ ...info, name: "Gonzalo", lastname: "Herrero" });
  };

  const changeDataDefault = () => {
    setInfo({ name: "Coyuyo", age: 31 });
  };

  return (
    <div className="info-container">
      <h2 className="countName">Change information</h2>
      <button className="glow-on-hover" onClick={changeData}>
        Change info
      </button>
      <button className="glow-on-hover" onClick={changeDataDefault}>
        Change info Default
      </button>
    </div>
  );
};

export default TukiChildChild;
