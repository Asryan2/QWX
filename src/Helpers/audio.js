let audioControl = document.getElementById("audioControl");

export function playAudio(src, from){
  audioControl.src = src
  audioControl.currentTime = from

  audioControl.play()
}

export function pauseAudio(){
  audioControl.pause()
  return audioControl.currentTime
}

export function stopAudio(){
  audioControl.pause()
  audioControl.currentTime = 0
}
