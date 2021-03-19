import { useEffect } from 'react'
import useSound from 'use-sound'
import { useSnapshot } from 'valtio'
import state from '../state'
import likeSound from './files/like.mp3'
import menuSound from './files/menu.m4a'
import ringtoneSound from './files/ringtone.wav'
import mail from './files/mail.wav'

const SoundManager = () => {
  const { selectedItem } = useSnapshot(state)
  const [playLike] = useSound(likeSound)
  const [playMenu] = useSound(menuSound)
  const [playRingtone] = useSound(ringtoneSound)
  const [playMail] = useSound(mail)
  state.likeSound = playLike
  state.playMenu = playMenu
  state.playRingtone = playRingtone
  state.playMail = playMail

  useEffect(() => {
    playMenu()
  }, [playMenu, selectedItem])

  return null
}

export default SoundManager
