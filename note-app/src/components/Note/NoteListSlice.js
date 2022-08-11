import {nanoid} from 'nanoid'
const initState = [
    {
        id: nanoid(),
        text: 'This is the first note',
        date: '15/05/2055'
    },
    {
        id: nanoid(),
        text: 'This is the second note',
        date: '15/05/2055'
    },
    {
        id: nanoid(),
        text: 'This is the third note',
        date: '15/05/2055'
    },
]
const noteListSlice = (state = initState, action) => {
    switch(action.type){
        case 'noteList/addNote': 
            return [...state, action.payload]
        case 'noteList/deleteNote': 
            const deleteNotes = state.filter(note => note.id !== action.payload)
            return deleteNotes
        case 'noteList/editNote':
            const newNotes = state.map(note => {
                return note.id === action.payload.id ? {...note, text: action.payload.text} : note
            })
            return newNotes
        case 'noteList/reloadNote': 
            return action.payload
        default: 
            return state
    }
}


export default noteListSlice
