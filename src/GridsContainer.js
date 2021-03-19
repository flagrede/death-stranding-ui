import { A11y } from '@react-three/a11y'
import React, { Suspense, useMemo, useState } from 'react'
import { EffectComposer, Outline } from 'react-postprocessing'
import * as THREE from 'three'
import { useSnapshot } from 'valtio'
import Briefcase from './Briefcase'
import Grid from './Grid'
import state from './state'

const textureLoader = new THREE.TextureLoader()
const smallCrossTexture = textureLoader.load('/textures/particles/smallCross.png')
const largeCrossTexture = textureLoader.load('/textures/particles/largeCross.png')

const LINES_NUMBER = 6
export const LINE_SPACING = 0.5

const POINTS_COUNT = 500
const POINTS_PER_LINE = 3 * 20
const POINTS_PER_LAYER = POINTS_PER_LINE * LINES_NUMBER

export const COLUMN_SPACING = 0.4
const COLUMN_OFFSET = 10
const SUITCASE_X_SPACING = 0.3
const SUITCASE_Y_SPACING = 0.1
const SUITCASE_Z_SPACING = 0.2

const GridsContainer = ({ briefcases }) => {
  const { selectedId } = useSnapshot(state)
  const [selectedBriefcase, setSelectedBriefcase] = useState()
  const [focusBriefcase, setFocusBriefcase] = useState()
  const [hoverBriefcase, setHoverBriefcase] = useState()

  const [positionsSmallCross, positionsBigCross, positionsBriefcases] = useMemo(() => {
    let positionsSmallCross = []
    let positionsBigCross = []
    let positionsBriefcases = []

    const placeholderArray = [...new Array(POINTS_COUNT * 3)]
    placeholderArray.map((value, index) => {
      const axe = index % 3
      const column = index % POINTS_PER_LINE
      const line = Math.floor(index / POINTS_PER_LINE)
      const layer = Math.floor(index / POINTS_PER_LAYER)

      let smallCross = 0
      let bigCross = 0
      let briefcase = 0

      if (axe === 0) {
        smallCross = column * COLUMN_SPACING - COLUMN_OFFSET - (column % 2 ? 0 : SUITCASE_X_SPACING)
        bigCross = smallCross + COLUMN_SPACING * 2
        briefcase = bigCross
      }
      if (axe === 1) {
        smallCross = (line % LINES_NUMBER) * LINE_SPACING - ((line % LINES_NUMBER) % 2 ? 0 : SUITCASE_Y_SPACING)
        bigCross = smallCross + LINE_SPACING / 2
        briefcase = bigCross
      }
      if (axe === 2) {
        smallCross = layer % 2 ? layer * -1.5 : layer * -1.5 - SUITCASE_Z_SPACING
        bigCross = smallCross
        briefcase = smallCross - 0.75
      }

      positionsSmallCross.push(smallCross)
      positionsBigCross.push(bigCross)
      positionsBriefcases.push(briefcase)
    })

    positionsBigCross = positionsBigCross.filter((value, index) => {
      // Filtering odd points on X and Y
      return index % 6 <= 2 && index % 120 <= 59
    })

    positionsBriefcases = positionsBriefcases.filter((value, index) => {
      // Filtering odd points on X and Y and Z
      // Also only display briefcase in the center
      return index % 6 <= 2 && index % 120 < 60 && index % 720 < 360 && 15 < index % POINTS_PER_LINE && index % POINTS_PER_LINE < 35
    })

    return [new Float32Array(positionsSmallCross), new Float32Array(positionsBigCross), new Float32Array(positionsBriefcases)]
  }, [])

  const outlineRefs = [selectedBriefcase, hoverBriefcase, focusBriefcase].filter(Boolean)

  return (
    <group position={[0, -1, 0]}>
      <Suspense fallback="loading...">
        {briefcases.map((item, index) => {
          const x = positionsBriefcases[index * 3]
          const y = positionsBriefcases[index * 3 + 1]
          const z = positionsBriefcases[index * 3 + 2]

          return (
            <A11y
              role="button"
              key={item.id}
              actionCall={() => {
                state.selectedItem = index
              }}
            >
              <Briefcase
                position={[x, y, z]}
                isSelected={item.id === selectedId}
                hoverBriefcase={hoverBriefcase}
                setSelectedBriefcase={setSelectedBriefcase}
                setFocusBriefcase={setFocusBriefcase}
                setHoverBriefcase={setHoverBriefcase}
              />
            </A11y>
          )
        })}
      </Suspense>

      <Grid texture={smallCrossTexture} positions={positionsSmallCross} />
      <Grid texture={largeCrossTexture} positions={positionsBigCross} />

      <EffectComposer>
        <Outline selection={[]} visibleEdgeColor="#2D4F8F" edgeStrength={2} />
      </EffectComposer>
    </group>
  )
}

export default GridsContainer
