import { useSpring, animated as a } from '@react-spring/web'
import OuterBox from './OuterBox'

const AnimatedOuterBox = () => {
  const [{ height }] = useSpring(() => ({
    from: { height: '0%' },
    to: { height: '100%' },
  }))

  return (
    <a.div className="absolute w-full left-0 right-0" style={{ height }}>
      <div className="relative h-full">
        <OuterBox />
      </div>
    </a.div>
  )
}

export default AnimatedOuterBox
