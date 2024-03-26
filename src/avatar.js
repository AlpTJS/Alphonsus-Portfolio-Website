import { extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HorizontalOrbitControls = ({ ...props }) => {
  const ref = useRef(null);
  const { setTarget } = useFrame(() => {
    ref.current.target.y = 0; // Reset target.y on each frame
  });

  extend({ OrbitControls: HorizontalOrbitControls });
  return <orbitControls ref={ref} {...props} />;
};

export default HorizontalOrbitControls;