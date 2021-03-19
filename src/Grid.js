import * as THREE from 'three'

const Grid = ({ texture, positions = [], ...props }) => (
  <points {...props}>
    <pointsMaterial
      size={0.6}
      opacity={0.5}
      color="#316B74"
      alphaMap={texture}
      transparent
      depthWrite={false}
      blending={THREE.AdditiveBlending}
    />
    <bufferGeometry attach="geometry">
      <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 3} array={positions} itemSize={3} />
    </bufferGeometry>
  </points>
)

export default Grid
