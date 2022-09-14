import {nanoid} from 'nanoid'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../shared/axios'

export default createSlice({
    name: 'atm',
    initialState: {status: 'idle', datas: []},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadDatasAtm.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(loadDatasAtm.fulfilled, (state, action) => {
            state.status = 'idle'
            state.datas = action.payload
        })
        .addCase(addDatasAtm.fulfilled, (state, action) => {
            state.datas = action.payload
        })
        .addCase(deleteAtm.fulfilled, (state, action) => {
            state.datas = action.payload
        })
    }
})

export const loadDatasAtm = createAsyncThunk('atm/loadDatas', async() => {
    const data = await axios.get('/api/v1/atms/')
    // console.log(data.data.atm)
    return data.data.atm
})

export const addDatasAtm = createAsyncThunk('atm/addDatas', async(atmName) => {
    const data = await axios.post("/api/v1/atms/", {
        name: atmName
    }
    )
    // console.log(data)
    return data.data
})

export const deleteAtm = createAsyncThunk('atm/deleteAtm', async(id) => {
    // console.log('adsfsfsd')
    const data = await axios.delete(`/api/v1/atms/${id}`)
    // console.log(data)
    const newdata = await axios.get('/api/v1/atms/')
    // console.log(newdata.data.atm)
    return newdata.data.atm
})


