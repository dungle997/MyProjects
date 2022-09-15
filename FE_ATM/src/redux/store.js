import {configureStore} from '@reduxjs/toolkit'
import loadUserSlice from './loadUserSlice'
import loadAtmSlice from './loadAtmSlice'
import headerSlice from './headerSlice'
import loadProcessedSlice from './loadProcessedSlice'
const store = configureStore({
    reducer: {
        quece: loadUserSlice.reducer,
        atm: loadAtmSlice.reducer,
        header: headerSlice.reducer,
        processedDone: loadProcessedSlice.reducer
    }    
})

export default store
