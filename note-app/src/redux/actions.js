import {nanoid} from 'nanoid'
const date = new Date()
export const addNote = (text) => {
    return{
        type: 'noteList/addNote',
        payload:{
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        } 
    } 
}

export const deleteNote = (id) => {
    return {
        type: 'noteList/deleteNote',
        payload: id
    }
}

export const editNote = (id, text) => {
    return {
        type: 'noteList/editNote',
        payload: {
            id,
            text
        }
    }
}

export const reloadNote = (list) => {
    return {
        type:'noteList/reloadNote',
        payload: list
    }
}

export const updateSearch = (input) => {
    return {
        type: 'search/addSearch',
        payload: input
    }
}