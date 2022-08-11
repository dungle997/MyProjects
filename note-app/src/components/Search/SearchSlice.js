const initState = {
    search: ''
}

const searchSlice = (state = initState, action) => {
    switch(action.type){
        case 'search/addSearch':
            return {...state, search: action.payload}
        default: 
            return state
    }
}

export default searchSlice