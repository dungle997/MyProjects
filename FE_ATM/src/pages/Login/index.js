import { Button, Checkbox, Form, Input } from 'antd'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import headerSlice from '../../redux/headerSlice'
import {loadUserName} from '../../redux/headerSlice'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        
            // const config = {
            //     headers: { Authorization: `Bearer ${token}` }
            // };
            
            const bodyParameters = {
               email: values.username,
               password: values.password
            };
            
        axios
            .post( 
              'http://localhost:9000/api/v1/auth/login',
              bodyParameters,
            //   config
            ).then((res) => {
                console.log(res)
                if (res.data.PRIVATE_TOKEN){
                    localStorage.setItem('user_token', JSON.stringify(res.data.PRIVATE_TOKEN))
                    // localStorage.setItem('react-app-note-data', JSON.stringify(oldDatas))
                    
                   
                    // dispatch(loadUserName())
                    dispatch(headerSlice.actions.saveUsername(res.data.user.email))
                    navigate("/mainpage")
                }

            })
            .catch(console.log);
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return (
    <div className="login">
        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 7,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>
    
            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>
    
            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 8,
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>
    
            <Form.Item
            wrapperCol={{
                offset: 11,
                span: 8,
            }}
            >
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            </Form.Item>
            <Form.Item
            wrapperCol={{
                xs: {
                    span: 24,
                    offset: 8
                  },
                  sm: {
                    span: 16,
                    offset: 11
                  }
            }}
            >
            <Link to="/register">Register Account</Link>
            </Form.Item>
        </Form>
    </div>
    );
};

export default Login