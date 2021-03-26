import { useEffect, useRef, useState } from 'react'
import { tw } from 'twind'
import { useSnapshot } from 'valtio'
import useClickOutside from '../hooks/useClickOutside'
import state from '../state'
import MenuEffect from './MenuEffect'
import MenuTab from './MenuTab'
import OuterBox from './OuterBox'

const actions = [
  {
    label: 'Move item(s) to Private Locker',
    category: 'private',
  },
  {
    label: 'Move item(s) to Share Locker',
    category: 'share',
  },
  {
    label: 'Move item(s) to Sam Cargo',
    category: 'sam',
  },
]

const ActionModal = ({ closeCallback, setSelectedInventoryItem }) => {
  const { selectedItem, itemsPrivateLocker, itemsShareLocker, selectedCategory, playMenuChange, playMenuAction } = useSnapshot(state)
  const [actionSelected, setActionSelected] = useState(0)
  const modalRef = useRef()
  useClickOutside(modalRef, closeCallback)

  const filteredActions = actions.filter((action) => action.category !== selectedCategory)

  useEffect(() => {
    modalRef.current.focus()
  }, [])

  const privateLockerAction = () => {
    state.allItems[selectedItem].category = 'private'
    setSelectedInventoryItem(0)
    closeCallback()
  }

  const shareLockerAction = () => {
    state.allItems[selectedItem].category = 'share'
    setSelectedInventoryItem(itemsPrivateLocker.length - 1)
    closeCallback()
  }

  const samCargoAction = () => {
    state.allItems[selectedItem].category = 'sam'
    setSelectedInventoryItem(itemsPrivateLocker.length + itemsShareLocker.length - 1)
    closeCallback()
  }

  const actionMapping = {
    private: privateLockerAction,
    share: shareLockerAction,
    sam: samCargoAction,
  }

  useEffect(() => playMenuAction(), [])

  const handleKeyPressed = (event) => {
    event.preventDefault()
    event.stopPropagation()
    let newAction
    if (event.key === 'ArrowUp') {
      newAction = actionSelected <= 0 ? filteredActions.length - 1 : actionSelected - 1
      playMenuChange()
    } else if (event.key === 'ArrowDown') {
      newAction = (actionSelected + 1) % filteredActions.length
      playMenuChange()
    } else if (event.key === 'Enter') {
      actionMapping[filteredActions[actionSelected].category]()
    } else if (event.key === 'Escape') {
      closeCallback()
    }
    setActionSelected(newAction)
  }

  return (
    <div className="flex justify-center w-full md:w-1/2 relative">
      <div
        className="absolute bg-black bg-opacity-80 w-4/5 mt-18 p-3 z-10 focus:outline-none "
        onKeyDown={handleKeyPressed}
        tabIndex={0}
        ref={modalRef}
      >
        <OuterBox />
        <MenuTab>
          <div>COMMAND</div>
        </MenuTab>
        <ul>
          {filteredActions.map((action, index) => (
            <li key={action.category} className="relative">
              <button className="flex focus:outline-none w-full text-left" onClick={actionMapping[action.category]}>
                <div className="absolute w-full">{actionSelected === index && <MenuEffect className="w-full" />}</div>
                <div className={tw`relative z-10 hover:bg-menu-effect w-full`}>{action.label}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ActionModal
