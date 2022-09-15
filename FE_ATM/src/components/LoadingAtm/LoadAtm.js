import './LoadAtm.scss'
import {DeleteFilled, UserOutlined} from '@ant-design/icons'
import {Typography} from 'antd'
import {deleteAtm} from '../../redux/loadAtmSlice'
import {useDispatch} from 'react-redux'

const {Text, Title} =  Typography
function LoadAtm({atmName, userName, status, id}) {
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        // console.log(id)
        dispatch(deleteAtm(id))
    }
    // console.log('asdjfljdslf = ',atmName, userName, status)
    return (   
        <div className="atm" draggable >
            <div className="atm__button--delete" onClick={handleDelete}>
                <DeleteFilled />
            </div>
            <div className="atm__image">
                <div style={{fontSize: "80px"}}>
                    <UserOutlined />
                </div>
            </div>
            <div className="atm__status">
                <Title level={2} style={{color: "pink"}}>{status}</Title>
            </div>
            <div className="atm__name">
                <Title level={3}>{atmName}</Title>
            </div>
            <div className="atm__username">
                <Title level={5}>{userName}</Title>
            </div>
            
        </div>
    )
}

export default LoadAtm;