import headerSlice from '../../redux/headerSlice'
import {useDispatch, useSelector} from 'react-redux'
import SyncStorage from 'sync-storage'
import { useNavigation } from '@react-navigation/native';

function useHeader() {
    const navigation = useNavigation()
    let userName = useSelector(state => state.header.userName)
    const dispatch = useDispatch()

    const handleAddAtm = () => {
        dispatch(headerSlice.actions.statusAddAtm(true))
        console.log('trueeureuuee')
    }
    const handleLogout = () => {
        navigation.navigate("Login")
        SyncStorage.remove('user_token')
    }
    
    return {
        userName, 
        handleAddAtm,
        handleLogout,
    };
}

export default useHeader;