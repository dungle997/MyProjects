import {nanoid} from 'nanoid'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../../shared/axios'

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
        }
    },
    extraReducers: builder => {
        builder.addCase(loadUserName.fulfilled, (state, action) => {
            state.userName = action.payload
        })
    }
})

export const loadUserName = createAsyncThunk('header/loadUserName', async() => {
    const data = await axios.get('/api/v1/auth/')
    console.log(data.data.user.email)
    return data.data.user.email
})

 



