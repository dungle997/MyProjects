import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../shared/axios'
import SyncStorage from 'sync-storage'

 
export default createSlice({
    name: 'atm',
    initialState: {status: 'idle', datas: []
    },
    reducers: {
        dndstate: (state, action) => {
            state.datas = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loadDatasAtm.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(loadDatasAtm.fulfilled, (state, action) => {
            state.status = 'idle'
            // console.log('arr = ',action.payload)
            // state.datas = action.payload.map((atm, index) => {
            //     return {...atm, index: index}
            // })
            if (!state.datas.length){
                // console.log('123')
                state.datas = action.payload
            } else {
                action.payload.forEach((newList, index) =>{
                    state.datas = state.datas.map((oldList, index) => {
                        if (newList.id === oldList.id){
                            return newList
                        }
                        return oldList
                    })
                })
            }
            

        })
        .addCase(addDatasAtm.fulfilled, (state, action) => {
            action.payload.data.forEach((newList, index)=>{
                if (action.payload.name === newList.name){
                    // console.log('doi tuong moi co name la = ',action.payload.data[index])
                    state.datas.push(action.payload.data[index])
                }
            })
            // state.datas = action.payload
        })
        .addCase(deleteAtm.fulfilled, (state, action) => {
            state.datas = state.datas.filter((newList, index) => newList.id !== action.payload)
        })
    }
})

export const loadDatasAtm = createAsyncThunk('atm/loadDatas', async() => {
    let token = JSON.parse(SyncStorage.get('user_token'))
    console.log(token)
    const data = await axios.get('/api/v1/atms/', {
        headers: {'Authorization': 'Bearer '+ token}
    })
    // const data = await axios.get('/api/v1/atms/', {
    //     headers: {'Authorization': 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzIxN2ZkYTEyNGEwY2IxNmIyYjMzZDkiLCJpYXQiOjE2NjM3NDMyMTZ9.7PI9GpbndPxXWfTeyDI1TBZWxgZOra6GoXewUFldgfY'}
    // })
    // console.log('data = ',data.data.atm)
    return data.data.atm
})

export const addDatasAtm = createAsyncThunk('atm/addDatas', async(atmName) => {
    let token = JSON.parse(SyncStorage.get('user_token'))
    const data = await axios.post("/api/v1/atms/", {
        name: atmName
    }, {
        headers: {'Authorization': 'Bearer '+ token}
    }
    )
    // console.log("add New atm = ",data)
    return {
        data: data.data,
        name: atmName
    }
})

export const deleteAtm = createAsyncThunk('atm/deleteAtm', async(id) => {
    let token = JSON.parse(SyncStorage.get('user_token'))
    const data = axios.delete(`/api/v1/atms/${id}`, {
        headers: {'Authorization': 'Bearer '+ token}
    })
    // console.log(data)
    // const newdata = await axios.get('/api/v1/atms/', {
    //     headers: {'Authorization': 'Bearer '+ token}
    // })
    // console.log(newdata.data.atm)
    return id
})


