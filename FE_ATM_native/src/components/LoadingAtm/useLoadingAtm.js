import {useDispatch, useSelector} from 'react-redux'
import { deleteAtm } from '../../redux/loadAtmSlice';

function useLoadingAtm() {
    const dispatch = useDispatch()
    const list = useSelector(state => state.atm.datas) 
    console.log('list = ',list)
    const handleDelete = (id) => {
        console.log('id = ', id)
        dispatch(deleteAtm(id))
    }
    return {
        list,
        handleDelete,
    };
}

export default useLoadingAtm;