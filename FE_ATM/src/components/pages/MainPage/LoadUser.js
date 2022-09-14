import './LoadUser.scss'
import {Typography} from 'antd'
import {UserOutlined} from '@ant-design/icons'

const {Text} = Typography

function LoadUser({name, transaction}) {
    return (  
        <div className="load__list">
            <div className="load__items">
                <div style={{fontSize: "30px"}}><UserOutlined /></div>
                <Text>Name: {name}</Text>
            </div>
            <div className="load__items">
                <Text>Transaction: {transaction}</Text>
            </div>
        </div>
    );
}

export default LoadUser;