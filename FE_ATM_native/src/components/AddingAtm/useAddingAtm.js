import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addDatasAtm } from '../../redux/loadAtmSlice';
import headerSlice from '../../redux/headerSlice';
function useAddingAtm() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const handleCancel = () => {
        dispatch(headerSlice.actions.statusAddAtm(false))
        setName('')
    }

    const handleCreate = () => {
        dispatch(addDatasAtm(name))
        dispatch(headerSlice.actions.statusAddAtm(false))
        setName('')
    }
    return {
        name,
        setName,
        handleCancel,
        handleCreate,
    };
}

export default useAddingAtm;