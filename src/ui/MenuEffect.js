import { useRef } from 'react'
import { useChain, useSpring, animated as a, config } from '@react-spring/web'
import { tw } from 'twind'

const MenuEffect = ({ className }) => {
  const opacityRef = useRef()
  const heightRef = useRef()
  const bgOpacityRef = useRef()
  const [{ x, opacity }] = useSpring(() => ({
    from: { x: 0, opacity: 1 },
    to: { x: 2, opacity: 0 },
    ref: opacityRef,
    config: { mass: 1, tension: 220, friction: 18 },
  }))

  const [{ height }] = useSpring(() => ({
    from: { height: 0 },
    to: { height: 24 },
    ref: heightRef,
    duration: 3000,
  }))

  const [{ bgOpacity, color }] = useSpring(() => ({
    from: { bgOpacity: 1, color: '#456798' },
    to: { bgOpacity: 0.5, color: '#3E5E8D' },
    ref: bgOpacityRef,
    loop: true,
    easing: (t) => t * t,
    config: config.slow,
  }))

  useChain([opacityRef, heightRef, bgOpacityRef], [0, 0.2, 0.2])

  return (
    <>
      <a.div className={tw`absolute z-0 h-6 bg-menu-item ${className}`} style={{ opacity: bgOpacity, height, backgroundColor: color }} />
      <a.div className="absolute h-6" style={{ opacity, width: '100%' }}>
        <svg className={tw`text-menu-effect fill-current`} width="100%" height="100%" viewBox="0 0 16 3" preserveAspectRatio="none">
          <a.path
            d={
              x &&
              x.to({
                range: [0, 1, 2],
                output: [
                  'M 0 0 l 16 0 l 0 3 l -16 0 l 0 -3',
                  'M 0 0 l 25 0 l -10 3 l -15 0 l 0 -3',
                  'M 0 0 l 16 0 L 16 3 l -5 0 l -11 -3 m 11 3',
                ],
              })
            }
          />
        </svg>
      </a.div>
    </>
  )
}

export default MenuEffect
