import { defaultIconPrefixCls } from 'antd/lib/config-provider'
import {combineReducers} from 'redux'
import noteListSlice from '../components/Note/NoteListSlice'
import searchSlice from '../components/Search/SearchSlice'

const rootReducer = combineReducers({
    search: searchSlice,
    noteList: noteListSlice
})

export default rootReducer