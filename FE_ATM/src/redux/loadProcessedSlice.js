import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../shared/axios'

export default createSlice({
    name: 'quece',
    initialState: {status: 'idle', datas: ''},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadProcessed.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(loadProcessed.fulfilled, (state, action) => {
            state.status = 'idle'
            state.datas = action.payload
        })
    }
})

export const loadProcessed = createAsyncThunk('quece/loadProcessed', async() => {
    let token = JSON.parse(localStorage.getItem('user_token'))
    
    const data = await axios.get('/api/v1/atms/', {
        headers: {'Authorization': 'Bearer '+ token}
    })
    // console.log(data.data.processedClient)
    return data.data.processedClient
})




