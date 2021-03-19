import { useSpring, animated as a } from '@react-spring/web'
import { tw } from 'twind'

const SideMenuEffect = () => {
  const [{ x, opacity }] = useSpring(() => ({
    from: { x: 0, opacity: 0.3 },
    to: { x: 2, opacity: 0 },
  }))

  return (
    <>
      <a.div className="absolute h-full" style={{ opacity, width: '100%' }}>
        <svg className={tw`text-menu-effect fill-current`} width="100%" height="100%" viewBox="0 0 16 3" preserveAspectRatio="none">
          <a.path
            d={x?.to({
              range: [0, 1, 2],
              output: [
                'M 0 0 l 16 0 l 0 3 l -16 0 l 0 -3',
                'M 0 0 l 25 0 l -10 3 l -15 0 l 0 -3',
                'M 0 0 l 16 0 L 16 3 l -5 0 l -11 -3 m 11 3',
              ],
            })}
          />
        </svg>
      </a.div>
    </>
  )
}

export default SideMenuEffect
