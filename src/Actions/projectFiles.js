
export const PROJECTFILES_ADD_AUDIO = "PROJECTFILES_ADD_AUDIO"
export function projectfilesAddAudio(file){
  return {
    type:PROJECTFILES_ADD_AUDIO,
    file
  }
}

export const PROJECTFILES_PLAYPAUSE_AUDIO = "PROJECTFILES_PLAYPAUSE_AUDIO"
export function projectfilesPlayPauseAudio(key){
  
  return {
    type:PROJECTFILES_PLAYPAUSE_AUDIO,
    key
  }
}

export const PROJECTFILES_PAUSE_ALL = "PROJECTFILES_PAUSE_ALL"
export function projectfilesPauseAll(){
  return {
    type: PROJECTFILES_PAUSE_ALL
  }
}

export const PROJECTFILES_STOP_AUDIO = "PROJECTFILES_STOP_AUDIO"
export function projectfilesStopAudio(key){
  return {
    type:PROJECTFILES_STOP_AUDIO,
    key
  }
}
