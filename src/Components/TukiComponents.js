import TukiChild from "./TukiChild";
import TukiChildChild from "./TukiChildChild";
import TukiChildChildChild from "./TukiChildChildChild";
import TukiChildx4 from "./TukiChildx4";

const TukiComponents = () => {
  console.log("tuki papá ");
  return (
    <div>
      <TukiChild />
      <TukiChildChild />
      <TukiChildChildChild />
      <TukiChildx4 />
    </div>
  );
};

export default TukiComponents;
