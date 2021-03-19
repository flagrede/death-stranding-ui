import React from 'react'
import { Canvas } from 'react-three-fiber'
import { useSnapshot } from 'valtio'
import ExternalGrid from './ExternalGrid'
import Floor from './Floor'
import GridsContainer from './GridsContainer'
import state from './state'
import HtmlOverlay from './ui'
import ZoomPrivateLocker from './zoomEffects/ZoomPrivateLocker'
import ZoomShareLocker from './zoomEffects/ZoomShareLocker'
import ZoomSamCargo from './zoomEffects/ZoomSamCargo'
import SoundManager from './sounds/SoundsManager'

export default function App() {
  const { itemsPrivateLocker, itemsShareLocker, itemsSam, isPrivateLocker, isShareLocker, isSamCargo } = useSnapshot(state)

  return (
    <>
      <HtmlOverlay />
      <Canvas>
        <ambientLight intensity={2} />
        <color attach="background" args={['#10161D']} />
        <GridsContainer briefcases={itemsPrivateLocker} />
        <ExternalGrid items={itemsShareLocker} position={[-10, -1, 10]} baseIndex={itemsPrivateLocker.length} />
        <ExternalGrid items={itemsSam} position={[6, -1, 10]} baseIndex={itemsPrivateLocker.length + itemsShareLocker.length} />
        {isPrivateLocker && <ZoomPrivateLocker />}
        {isShareLocker && <ZoomShareLocker />}
        {isSamCargo && <ZoomSamCargo />}
        <Floor />
        <fog attach="fog" args={['#10161D', 10, 20]} />
        <SoundManager />
      </Canvas>
    </>
  )
}
