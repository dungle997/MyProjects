import {configureStore} from '@reduxjs/toolkit'
import  loadUserSlice from '../components/pages/MainPage/loadUserSlice'
import loadAtmSlice from '../components/pages/MainPage/loadAtmSlice'
import headerSlice from '../components/Layout/common/Header/headerSlice'
const store = configureStore({
    reducer: {
        quece: loadUserSlice.reducer,
        atm: loadAtmSlice.reducer,
        header: headerSlice.reducer
    }    
})

export default store
