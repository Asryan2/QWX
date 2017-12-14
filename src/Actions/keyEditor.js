export const KEYEDITOR_PLAYPAUSE_AUDIO = "KEYEDITOR_PLAYPAUSE_AUDIO"
export function keyEditorPlayPauseAudio(key){
  return {
    type:KEYEDITOR_PLAYPAUSE_AUDIO,
    key
  }
}

export const KEYEDITOR_PAUSE_ALL = "KEYEDITOR_PAUSE_ALL"
export function keyEditorPauseAll(){
  return {
    type: KEYEDITOR_PAUSE_ALL
  }
}

export const KEYEDITOR_STOP_AUDIO = "KEYEDITOR_STOP_AUDIO"
export function keyEditorStopAudio(key){
  return {
    type:KEYEDITOR_STOP_AUDIO,
    key
  }
}
