import {
  PROJECTFILES_ADD_AUDIO,
  PROJECTFILES_PLAYPAUSE_AUDIO,
  PROJECTFILES_PAUSE_ALL,
  PROJECTFILES_STOP_AUDIO
} from "../Actions/projectFiles"
import { Howl } from 'howler'


const initialState = {
  audioFiles: []
}

const projectFiles = function(state = initialState, action){
  switch(action.type){
    case PROJECTFILES_ADD_AUDIO:
      let file = new Howl(
        {
          src:URL.createObjectURL(action.file),
          format: action.file.type.split("/")[1]
        }
      )
      return Object.assign({}, state, {
        audioFiles: [...state.audioFiles,
          {
            key:state.audioFiles.length,
            name:action.file.name,
            file,
            isPlaying: false,
            percentCompleted: 0
          }
        ]
      })
    case PROJECTFILES_PLAYPAUSE_AUDIO:
      return {
        audioFiles: state.audioFiles.map((audio)=>{
          if(audio.key === action.key){
            if(!audio.isPlaying){
              setInterval(() => {

              }
                ,100)
                audio.file.play()
            }
            else
              audio.file.pause()

            return Object.assign({}, audio, {isPlaying: !audio.isPlaying})
          }
          return audio
        })
      }
    case PROJECTFILES_PAUSE_ALL:
      return {audioFiles: state.audioFiles.map((audio)=>{
            audio.file.pause()
          return Object.assign({}, audio, {isPlaying: false})
        return audio
      })}
    case PROJECTFILES_STOP_AUDIO:
        return {audioFiles: state.audioFiles.map((audio)=>{
          if(audio.key === action.key){
              audio.file.stop()
              return Object.assign({}, audio, {isPlaying: false})
          }
          return audio
        })}
    default:
      return state
  }
}

export default projectFiles
