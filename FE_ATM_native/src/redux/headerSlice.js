import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../shared/axios'
import SyncStorage from 'sync-storage'


export default createSlice({
    name: 'header',
    initialState: { 
                    login: false,
                    logout: false,
                    addAtm: false,
                    userName: '',
                  },
    reducers: {
        statusLogin: (state, action) => {
            state.login = action.payload
        },
        statusLogout: (state, action) => {
            state.logout = action.payload
        },
        statusAddAtm: (state, action) => {
            state.addAtm = action.payload
        },
        saveUsername: (state, action) => {
            state.userName = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loadUserName.fulfilled, (state, action) => {
            // console.log("log action = ",action.payload)
            state.userName = action.payload
        })
    }
})

export const loadUserName = createAsyncThunk('header/loadUserName', async() => {
    let token = JSON.parse(SyncStorage.get('user_token'))
    const data = await axios.get('/api/v1/auth/', {
        headers: {'Authorization': 'Bearer '+ token}
    })
    // console.log(data.data.user.email)
    return data.data.user.email
})

 



