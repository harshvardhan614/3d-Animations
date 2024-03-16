import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./MyModal";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar scale={1.2}/>
        <ambientLight intensity={1} />
      </group>
    </>
  );
};
