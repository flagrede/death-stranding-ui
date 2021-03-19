import { Plane } from '@react-three/drei'

const Floor = () => (
  <>
    <Plane rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -6, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="#1D2832" />
    </Plane>
  </>
)

export default Floor
