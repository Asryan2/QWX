import {
  PIANO_KEYON,
  PIANO_KEYOFF,
} from "../Actions/piano"

import { playNote, stopNote } from "../Helpers/audio"

const initialState = {
  keys: [
    {id: 1, isPlaying: false},
    {id: 2, isPlaying: false},
    {id: 3, isPlaying: false},
    {id: 4, isPlaying: false},
    {id: 5, isPlaying: false},
    {id: 6, isPlaying: false},
    {id: 7, isPlaying: false},
    {id: 8, isPlaying: false},
    {id: 9, isPlaying: false},
    {id: 10, isPlaying: false},
    {id: 11, isPlaying: false},
    {id: 12, isPlaying: false},
  ]
}

const piano = function(state = initialState, action){
  switch(action.type){
    case PIANO_KEYON:
    playNote(action.id)
      return {
        keys: state.keys.map((key)=>{
          if(key.id == action.id){

            return Object.assign({}, key, {isPlaying: true});
          }
          return key
        })
      }
    case PIANO_KEYOFF:
    stopNote(action.id)

      return {
        keys: state.keys.map((key)=>{
          if(key.id == action.id){
            return Object.assign({}, key, {isPlaying: false});
          }
          return key
        })
      }
    default:
      return state
  }
}

export default piano
