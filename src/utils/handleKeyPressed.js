import state from '../state'
import { items } from './App'

const handleKeyPressed = (event) => {
  if (event.key === 'ArrowUp') {
    state.selectedItem = state.selectedItem <= 0 ? items.length - 1 : state.selectedItem - 1
  } else if (event.key === 'ArrowDown') {
    state.selectedItem = (state.selectedItem + 1) % items.length
  }
}

export default handleKeyPressed
