import useSound from 'use-sound'
import state from '../state'
import likeSound from './files/like.mp3'
import menuChangeSound from './files/menu1.mp3'
import menuActionSound from './files/menu2.mp3'
import menuValidateSound from './files/menu3.mp3'
import ringtoneSound from './files/ringtone.wav'
import mail from './files/mail.wav'

const SoundManager = () => {
  const [playLike] = useSound(likeSound, { volume: 0.5 })
  const [playMenuChange] = useSound(menuChangeSound)
  const [playMenuAction] = useSound(menuActionSound)
  const [playMenuValidate] = useSound(menuValidateSound)
  const [playRingtone] = useSound(ringtoneSound, { volume: 0.7 })
  const [playMail] = useSound(mail, { volume: 0.7 })
  state.likeSound = playLike
  state.playMenuChange = playMenuChange
  state.playMenuAction = playMenuAction
  state.playMenuValidate = playMenuValidate
  state.playRingtone = playRingtone
  state.playMail = playMail

  return null
}

export default SoundManager
