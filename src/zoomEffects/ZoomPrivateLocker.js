import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

function ZoomPrivateLocker() {
  const vec = new THREE.Vector3(0, 1.5, 4)
  return useFrame((state) => {
    state.camera.position.lerp(vec, 0.075)
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
  })
}

export default ZoomPrivateLocker
