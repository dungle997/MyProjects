import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { loadDatasAtm } from '../../redux/loadAtmSlice';
import { loadProcessed } from '../../redux/loadProcessedSlice';
import { loadDatas } from '../../redux/loadUserSlice';

function useMainPage() {
    const dispatch = useDispatch()
    let stateAddAtm = useSelector(state => state.header.addAtm)
    const processed= useSelector(state => state.processedDone.datas)
    const arr = processed.split(', ')
    const subarr = arr.slice(arr.length - 1 - 10, arr.length - 1)
    useEffect(()=>{
        dispatch(loadDatas())
        dispatch(loadDatasAtm())
        dispatch(loadProcessed())
    }, [])
    useEffect(()=>{
        const timerId = setInterval(()=>{
            dispatch(loadDatas())
            dispatch(loadDatasAtm())
            dispatch(loadProcessed())
        }, 1800)
        return () => clearInterval(timerId)

    }, [])
    return {
        stateAddAtm,
        subarr,
    };
}

export default useMainPage;