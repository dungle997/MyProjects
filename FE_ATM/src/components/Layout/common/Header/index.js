import './Header.scss'
import {Button, Typography} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import { useEffect } from 'react';
import headerSlice, {loadUserName} from '../../../../redux/headerSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'



function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let userName = useSelector(state => state.header.userName)
    let stateAddAtm = useSelector(state => state.header.addAtm)
    // console.log(stateAddAtm)
    useEffect (()=>{
        dispatch(loadUserName())
    }, [])
    const handleAddAtm = () =>{
        dispatch(headerSlice.actions.statusAddAtm(true))
    }
    const handleLogOut = () => {
        navigate('/')
        localStorage.clear()
    }
    return (  
        <div className="header">
            <div className="header__inner">
                <Button type="primary" onClick={handleAddAtm}>Add new ATM</Button>
            </div>
            <div className="header__logout">
                <div className="header__userinfo">
                    <div className="header__userinfo--text">
                        <Typography.Text style={{fontSize: "18px"}}>{userName}</Typography.Text>
                    </div>
                    <div className="header__userinfo--icon">
                        <UserOutlined style={{fontSize: "40px"}}/>
                    </div>
                </div>
                <Button type="primary" onClick={handleLogOut}>Log Out</Button>

            </div>
        </div>
    );
}

export default Header;