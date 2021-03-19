import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import AnimatedOuterBox from './AnimatedOuterBox'
import OuterBox from './OuterBox'
import SideMenuEffect from './SideMenuEffect'
import { tw } from 'twind'
import AnimatedBar from './AnimatedBar'
import state from '../state'

const ItemDescription = () => {
  const { selectedItem, allItems, likeSound } = useSnapshot(state)

  const item = allItems[selectedItem]
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null)
  const [isTriggered, setIsTriggered] = useState(false)

  useEffect(() => {
    if (selectedItem !== currentSelectedItem) {
      setCurrentSelectedItem(selectedItem)
    }
  }, [selectedItem])

  useEffect(() => {
    setIsTriggered(true)
  }, [currentSelectedItem])

  useEffect(() => {
    if (!isTriggered) return

    const timeoutId = window.setTimeout(() => {
      setIsTriggered(false)
    }, 300)
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isTriggered])

  const handleLike = () => {
    state.allItems[selectedItem].likes++
    likeSound()
  }

  return (
    <div className="w-full md:w-1/3 relative md:fixed right-0 px-3 mt-6 md:mt-0">
      {isTriggered && <SideMenuEffect selectedItem={selectedItem} />}
      {isTriggered ? <AnimatedOuterBox /> : <OuterBox />}
      <div className={tw`flex items-center bg-menu-header text-xs h-6 px-2 edge-corner mb-2 -my-2`}>Details</div>
      <img className="mx-auto my-4" src={`/items/${item?.image}`} alt="" />
      <div className="mb-2">{item?.name}</div>
      <div className="border-b border-gray-600 border-opacity-40 border-t mb-4 py-4">
        <div>Container damage</div>
        <div className="bg-red-500 bg-opacity-80 border border-gray-600 h-4 w-full">
          {isTriggered ? (
            <AnimatedBar damage={item.damage} />
          ) : (
            <div className="bg-blue-500 bg-opacity-80 h-full w-full" style={{ width: `${item.damage}%` }} />
          )}
        </div>
      </div>
      <div className="mb-2 text-xs">{item?.description}</div>
      <div
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer flex items-center justify-center text-white pt-1.5"
        onClick={handleLike}
      >
        Like
      </div>
    </div>
  )
}

export default ItemDescription
