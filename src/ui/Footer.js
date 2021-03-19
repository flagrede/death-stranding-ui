import cx from 'classnames'
import { useSnapshot } from 'valtio'
import state from '../state'
import AnimatedOuterBox from './AnimatedOuterBox'
import Credits from './Credit'

const Footer = () => {
  const { totalWeight } = useSnapshot(state)
  return (
    <div className="relative flex flex-col m-4 text-white">
      <AnimatedOuterBox />
      <div className="flex mb-4 text-xs items-center">
        <div className="flex items-center justify-center h-8 w-32 mr-4 bg-red-500">1000/1000ml</div>
        <div className="flex items-center justify-center h-8 w-32 mr-4 bg-yellow-500">1000/1000ml</div>
        <div className={cx({ 'text-yellow-600': totalWeight > 15, 'text-red-500': totalWeight > 25 }, 'mr-4 text-lg')}>{totalWeight}kg</div>
      </div>
      <div className="flex items-center">
        <div className="flex w-32 mr-4 bg-blue-900 bg-opacity-50">
          <div className="w-full h-8 mr-1 bg-blue-600" />
          <div className="w-full h-8 mr-1 bg-blue-600" />
          <div className="w-full h-8 mr-1 bg-blue-600" />
          <div className="w-full h-8 mr-1 bg-blue-600" />
        </div>
        <div className="flex items-center justify-center h-8 w-32 mr-4 bg-blue-300" />
      </div>
      <Credits />
    </div>
  )
}

export default Footer
