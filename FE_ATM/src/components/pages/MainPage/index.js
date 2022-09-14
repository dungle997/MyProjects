import "./MainPage.scss"
import Header from '../../Layout/common/Header'
import LoadUser from '../MainPage/LoadUser'
import {Typography} from 'antd'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadDatas} from './loadUserSlice'
import {loadDatasAtm} from './loadAtmSlice'
import {useSelector} from 'react-redux'
import LoadAtm from './LoadAtm'
import AddAtm from "./AddAtm"

function MainPage() {
    const dispatch = useDispatch()
    const listAtm = useSelector(state => state.atm.datas)
    let stateAddAtm = useSelector(state => state.header.addAtm)

    console.log(listAtm)
    const quecesss = [
        {   
            id: 1,
            name : "Smith",
            transaction: 9,
        },
        {
            id: 2,
            name : "Jane",
            transaction: 9,
        },
        {
            id: 3,
            name : "Steve",
            transaction: 9,
        },     
    ]
    useEffect(()=>{
        dispatch(loadDatas())
        dispatch(loadDatasAtm())
    }, [])
    return ( 
        <div className="mainpage">
            <Header/>
            <div className="mainpage__content"> 
                <div className="list__atm">
                    {listAtm.map((atm, index) => {
                        return(<LoadAtm 
                            key={atm.id}
                            atmName = {atm.name}
                            userName={atm.client}
                            status={atm.status}
                            id = {atm.id}
                        />
                        )
                    })}
                   {stateAddAtm && <AddAtm />} 
                   

                    
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
                        {quecesss.map((user)=>{
                            return (<LoadUser 
                                        key = {user.id}
                                        name = {user.name}
                                        transaction = {user.transaction}
                                    />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="mainpage__infomation">
                <h2>Processed Client</h2>
            </div>
        </div>
    );
}

export default MainPage;
