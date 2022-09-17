import "./MainPage.scss"
import Header from '../../components/Layout/common/Header'
import LoadUser from '../../components/LoadingUser/LoadUser'
import {Typography} from 'antd'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadDatas} from '../../redux/loadUserSlice'
import {loadDatasAtm} from '../../redux/loadAtmSlice'
import {loadProcessed} from '../../redux/loadProcessedSlice' 
import {useSelector} from 'react-redux'
import LoadAtm from '../../components/LoadingAtm/LoadAtm'
import AddAtm from "../../components/AddingAtm/AddAtm"
import DndAtm from '../../components/DndAtm'

function MainPage() {
    const dispatch = useDispatch()
    const listAtm = useSelector(state => state.atm.datas)
    let stateAddAtm = useSelector(state => state.header.addAtm)
    const queces = useSelector(state => state.quece.datas)
    const processed= useSelector(state => state.processedDone.datas)
    const arr = processed.split(', ')
    const subarr = arr.slice(0, 10)
    // console.log('queces = ',queces)
    let quece = [{   
        name : "default",
        transaction: 1,
    }]

    if (queces.length>0 && queces.length < 6) {
        quece = queces.slice()
        console.log("asjdfljalskdf")
    }
    else{
        quece = queces.slice(0,5)
        
    }
    // console.log("quece === ",quece)

    // console.log(listAtm)

    useEffect(()=>{
        // dispatch(loadDatas())
        // dispatch(loadDatasAtm())
        
    }, [])
    useEffect(()=>{
        dispatch(loadProcessed())
        const timerId = setInterval(()=>{
            dispatch(loadDatas())
            dispatch(loadDatasAtm())

        }, 2000)
        return () => clearInterval(timerId)

    }, [])
    return ( 
        <div className="mainpage">
            <Header/>
            <div className="mainpage__content"> 
                <div className="list__atm">
                    {/* {listAtm && <DndAtm listAtm={listAtm}/>}
                    {stateAddAtm && <AddAtm />}  */}
                   

                    
                </div>
                <div className="queue">
                    <Typography.Title
                        // editable
                        level={5}
                        style={{
                        margin: 0,
                        // fontSize: "78px",
                        }}
                    >
                        Queue
                    </Typography.Title>
                    <div className="queue__inner">
                        {quece.map((user, index)=>{
                            return (<LoadUser 
                                        key = {index}
                                        name = {user.name}
                                        transaction = {user.transaction}
                                    />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="mainpage__infomation">
                <Typography.Title
                    // editable
                    level={4}
                    style={{
                    margin: 0,
                    // fontSize: "78px",
                    }}
                >
                    Prosessed Client
                </Typography.Title>
                <Typography.Text style={{fontSize: "18px"}}>Transaction Done: {subarr.join(', ')}</Typography.Text>
            </div>
        </div>
    );
}

export default MainPage;
