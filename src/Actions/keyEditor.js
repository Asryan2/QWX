export const KEYEDITOR_PLAY_AUDIO = "KEYEDITOR_PLAY_AUDIO"
export function keyEditorPlayAudio(key){
  return {
    type:KEYEDITOR_PLAY_AUDIO,
    key
  }
}

export const KEYEDITOR_PAUSE_AUDIO = "KEYEDITOR_PAUSE_AUDIO"
export function keyEditorPauseAudio(key){
  return {
    type:KEYEDITOR_PAUSE_AUDIO,
    key
  }
}


export const KEYEDITOR_PAUSE_ALL = "KEYEDITOR_PAUSE_ALL"
export function keyEditorPauseAll(){
  return {
    type: KEYEDITOR_PAUSE_ALL
  }
}

export const KEYEDITOR_RELOAD_AUDIO = "KEYEDITOR_RELOAD_AUDIO"
export function keyEditorReloadAudio(key){
  return {
    type:KEYEDITOR_RELOAD_AUDIO,
    key
  }
}

export const KEYEDITOR_CHANGE_AUDIO = "KEYEDITOR_CHANGE_AUDIO"
export function keyEditorChangeAudio(audio, key){
  return {
    type:KEYEDITOR_CHANGE_AUDIO,
    info: {audio, key}
  }
}

export const KEYEDITOR_CHANGE_FROM = "KEYEDITOR_CHANGE_FROM"
export function keyEditorChangeFrom(from, key){
  return {
    type:KEYEDITOR_CHANGE_FROM,
    info: {from, key}
  }
}

export const KEYEDITOR_CHANGE_TO = "KEYEDITOR_CHANGE_TO"
export function keyEditorChangeTo(to, key){
  return {
    type:KEYEDITOR_CHANGE_TO,
    info: {to, key}
  }
}
