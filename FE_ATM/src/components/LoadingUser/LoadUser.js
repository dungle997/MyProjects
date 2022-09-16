import './LoadUser.scss'
import {Typography} from 'antd'
import {UserOutlined} from '@ant-design/icons'

const {Text} = Typography

function LoadUser({name, transaction}) {
    return (  
        <div className="load__list">
            <div className="load__list--wrapper">
                <div className="load__items--image">
                    <div style={{fontSize: "60px"}}><UserOutlined /></div>
                </div>
                <div className="load__items">
                    <Text>Name: {name}</Text>
                    <Text>Transaction: {transaction}</Text>
                </div>
            </div>
        </div>
    );
}

export default LoadUser;