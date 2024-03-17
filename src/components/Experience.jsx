import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./MyModal";

export const Experience = () => {
  return (
    <>
      <OrbitControls 
      enableZoom={false} 
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <group position={[0, 0, 0]}>
        <Avatar scale={1.2}/>
        <ambientLight intensity={1} />
      </group>
    </>
  );
};
