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
                xs:
                {
                    span: 0,
                },
                md: {
                    span: 6
                },
                xxl: {
                    span: 8,
                }
            }}
            wrapperCol={{
                xs: {
                    offset: 0,
                    span: 24,
                },
                sm: {
                    offset: 0,
                    span: 16,
                }, 
                md: {
                    offset: 0,
                    span: 14,
                },
                xl: {
                    offset: 0,
                    span: 14,
                },
                xxl: {
                    offset: 0,
                    span: 8,
                }
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
            // wrapperCol={{
            //     xs: {
            //         offset: 0,
            //         span: 24,
            //     },
            //     sm: {
            //         offset: 0,
            //         span: 8,
            //     }
            // }}
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
                xs: {
                    offset: 0,
                    span: 24,
                },
                sm: {
                    offset: 0,
                    span: 8,
                },
                md: {
                    offset: 3,
                    span: 16
                }, 
                lg: {
                    offset: 3,
                    span: 16
                }, 
                xl: {
                    offset: 4,
                    span: 16
                },
                xxl: {
                    offset: 8,
                    span: 16
                }
                
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>
    
            <Form.Item
            wrapperCol={{
                xs: {
                    offset: 9,
                    span: 8,
                },
                sm: {
                    offset: 10,
                    span: 8,
                },
                md: {
                    offset: 11,
                    span: 16
                }, 
                // xxl: {
                //     offset: 11,
                //     span: 16
                // }
            }}
            >
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            </Form.Item>
            <div className="link_register">
                <Form.Item
                wrapperCol={{
                    xs: {
                        span: 24,
                        offset: 7
                      },
                      sm: {
                        span: 16,
                        offset: 8
                      },
                      md: {
                        offset: 10,
                        span: 16
                      }, 
                      lg: {
                        offset: 11,
                        span: 16
                      },
                      xxl: {
                        offset: 11,
                        span: 16
                        }
                }}
                >
                <Link to="/register">Register Account</Link>
                </Form.Item>
            </div>
        </Form>
    </div>
    );
};

export default Login