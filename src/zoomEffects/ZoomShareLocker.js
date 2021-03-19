import { useFrame } from 'react-three-fiber'

import * as THREE from 'three'

function ZoomShareLocker() {
  const vec = new THREE.Vector3(-10, -1, 15)
  return useFrame((state) => {
    state.camera.position.lerp(vec, 0.075)
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
  })
}

export default ZoomShareLocker
