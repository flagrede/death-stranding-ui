import { Suspense } from 'react'
import { useSnapshot } from 'valtio'
import Briefcase from './Briefcase'
import state from './state'
import { getPositionExternalGrid } from './utils/getPositionExternalGrid'

const ExternalGrid = ({ items, position }) => {
  const { selectedId } = useSnapshot(state)
  return (
    <group position={position}>
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback="loading...">
        {items.map((item, index) => {
          return <Briefcase isSelected={item.id === selectedId} key={item.id} position={getPositionExternalGrid(index)} />
        })}
      </Suspense>
    </group>
  )
}

export default ExternalGrid
