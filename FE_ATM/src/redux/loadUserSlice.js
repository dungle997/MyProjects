import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../shared/axios'

export default createSlice({
    name: 'quece',
    initialState: {status: 'idle', datas: []},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadDatas.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(loadDatas.fulfilled, (state, action) => {
            state.status = 'idle'
            state.datas = action.payload
        })
        // .addCase(addDatas.fulfilled, (state, action) => {
        //     state.notes.push(action.payload)
        // })
    }
})

export const loadDatas = createAsyncThunk('quece/loadDatas', async() => {
    let token = JSON.parse(localStorage.getItem('user_token'))
    
    const data = await axios.get('/api/v1/atms/', {
        headers: {'Authorization': 'Bearer '+ token}
    })
    // console.log(data.data.queue)
    return data.data.queue
})

// export const addDatas = createAsyncThunk('quece/addDatas', async(text) => {
//     const newNote = {
//         id: nanoid(),
//         text: text,
//         // date: date.toLocaleDateString()
//     }
//     // handle storage
//     const oldDatas = JSON.parse(localStorage.getItem('react-app-note-data'))
//     console.log('hello = ',oldDatas)
//     oldDatas.push(newNote)
//     localStorage.setItem('react-app-note-data', JSON.stringify(oldDatas))
//     console.log(oldDatas)
//     return newNote
// })


