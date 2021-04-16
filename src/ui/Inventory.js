import { useSprings } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import state from '../state'
import ActionModal from './ActionModal'
import MenuItems from './MenuItems'
import MenuTab from './MenuTab'

const Inventory = () => {
  const {
    selectedItem,
    allItems,
    allItemsSorted,
    itemsPrivateLocker,
    itemsShareLocker,
    itemsSam,
    playMenuValidate,
    playMenuChange,
    isThreeLoaded,
  } = useSnapshot(state)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedInventoryItem, setSelectedInventoryItem] = useState(selectedItem)
  const tableRef = useRef(null)

  useEffect(() => {
    if (tableRef.current) {
      setTimeout(() => tableRef.current.focus(), 500)
    }
  }, [tableRef, isThreeLoaded])

  const handleKeyPressed = (event) => {
    let newSelectedInventoryItem
    if (event.key === 'ArrowUp') {
      newSelectedInventoryItem = selectedInventoryItem <= 0 ? allItemsSorted.length - 1 : selectedInventoryItem - 1
    } else if (event.key === 'ArrowDown') {
      newSelectedInventoryItem = (selectedInventoryItem + 1) % allItemsSorted.length
    } else if (event.key === 'Enter') {
      setIsModalOpen(true)
      return
    }
    setSelectedInventoryItem(newSelectedInventoryItem)
  }

  const onClick = (index) => {
    if (index === selectedInventoryItem) {
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
    tableRef.current.focus()
    setSelectedInventoryItem(index)
  }

  const closeCallback = () => {
    setIsModalOpen(false)
    playMenuValidate()
    tableRef.current.focus()
  }

  useEffect(() => {
    const selectedId = allItemsSorted[selectedInventoryItem]?.id
    if (selectedId !== undefined) {
      state.selectedItem = allItems.findIndex((item) => item.id === selectedId)
    }
  }, [selectedInventoryItem, allItems, allItemsSorted])

  useEffect(() => playMenuChange(), [selectedItem])

  return (
    <div ref={tableRef} className="w-full md:w-2/3 focus:outline-none" onKeyDown={handleKeyPressed} tabIndex={0}>
      <MenuTab className="w-full md:w-1/2">
        <div className="w-full md:w-4/6">Name</div>
        <div className="w-full md:w-1/6">Likes</div>
        <div className="w-full md:w-1/6">Weight</div>
      </MenuTab>
      <div className="relative">
        {isModalOpen && <ActionModal closeCallback={closeCallback} setSelectedInventoryItem={setSelectedInventoryItem} />}
        <MenuItems items={itemsPrivateLocker} menuCategoryName="Private Locker" onClick={onClick} selectedItem={selectedInventoryItem} />
        <MenuItems
          items={itemsShareLocker}
          menuCategoryName="Share Locker"
          onClick={onClick}
          selectedItem={selectedInventoryItem}
          baseIndex={itemsPrivateLocker.length}
        />
        <MenuItems
          items={itemsSam}
          menuCategoryName="Sam Cargo"
          onClick={onClick}
          selectedItem={selectedInventoryItem}
          baseIndex={itemsPrivateLocker.length + itemsShareLocker.length}
        />
      </div>
    </div>
  )
}

export default Inventory
