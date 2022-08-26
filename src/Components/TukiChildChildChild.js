import { useState } from "react";

const TukiChildChildChild = () => {
  const [Loading, setLoading] = useState(false);

  const changeLoading = () => {
    setLoading(!Loading);
  };
  console.log(Loading);
  return (
    <div>
      <h2 className="countName"> Change Loading</h2>
      <button className="glow-on-hover" onClick={changeLoading}>
        Change Loading
      </button>
    </div>
  );
};

export default TukiChildChildChild;
