import { useSpring, animated as a } from '@react-spring/web'

const AnimatedBar = ({ damage }) => {
  const [{ width }] = useSpring(() => ({
    from: { width: '0%' },
    to: { width: `${damage}%` },
  }))

  return (
    <a.div style={{ width }} className="h-full">
      <div className="bg-blue-500 bg-opacity-80 h-full w-full" />
    </a.div>
  )
}

export default AnimatedBar
