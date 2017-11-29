export const PIANO_KEYON = "PIANO_KEYON"
export function pianoKeyOn(id){
  return {
    type:PIANO_KEYON,
    id
  }
}

export const PIANO_KEYOFF = "PIANO_KEYOFF"
export function pianoKeyOff(id){
  return {
    type:PIANO_KEYOFF,
    id
  }
}
