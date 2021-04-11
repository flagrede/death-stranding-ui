import React from 'react'
import { BrightnessContrast, EffectComposer, SSAO } from 'react-postprocessing'
import { Canvas } from 'react-three-fiber'
import { useSnapshot } from 'valtio'
import ExternalGrid from './ExternalGrid'
import Floor from './Floor'
import GridsContainer from './GridsContainer'
import SoundManager from './sounds/SoundsManager'
import state from './state'
import HtmlOverlay from './ui'
import ZoomPrivateLocker from './zoomEffects/ZoomPrivateLocker'
import ZoomSamCargo from './zoomEffects/ZoomSamCargo'
import ZoomShareLocker from './zoomEffects/ZoomShareLocker'

export default function App() {
  const { itemsPrivateLocker, itemsShareLocker, itemsSam, isPrivateLocker, isShareLocker, isSamCargo } = useSnapshot(state)

  return (
    <>
      <HtmlOverlay />
      <Canvas>
        <hemisphereLight intensity={2} />
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} intensity={2} />
        <color attach="background" args={['#2A3C47']} />
        <GridsContainer briefcases={itemsPrivateLocker} />
        <ExternalGrid items={itemsShareLocker} position={[-10, -1, 10]} baseIndex={itemsPrivateLocker.length} />
        <ExternalGrid items={itemsSam} position={[6, -1, 10]} baseIndex={itemsPrivateLocker.length + itemsShareLocker.length} />
        {isPrivateLocker && <ZoomPrivateLocker />}
        {isShareLocker && <ZoomShareLocker />}
        {isSamCargo && <ZoomSamCargo />}
        <Floor />
        <fog attach="fog" args={['#2A3C47', 10, 20]} />
        <SoundManager />
      </Canvas>
    </>
  )
}
