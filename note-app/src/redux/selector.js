import { createSelector } from "reselect"
export const noteList = state => state.noteList
export const searchText = state => state.search.search

export const noteListRemaining = createSelector(noteList, searchText, (todos, search)=>{
    return todos.filter(todo => todo.text.includes(search))
})