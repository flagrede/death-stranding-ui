import state from '../state'
import TopBarItem from './TopBarItem'

const TopBar = () => (
  <div className="flex justify-end mx-2">
    <TopBarItem icon="mail" onClick={state.playMail} />
    <TopBarItem icon="call" onClick={state.playRingtone} />
  </div>
)

export default TopBar
