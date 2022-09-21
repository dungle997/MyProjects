// import axios from 'axios'
// import {useDispatch} from 'react-redux'
// import headerSlice from '../../redux/headerSlice'
// import {useNavigate} from 'react-router-dom'

// function useLogin() {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const onFinish = (values) => {
//         console.log('Success:', values);
        
//             // const config = {
//             //     headers: { Authorization: `Bearer ${token}` }
//             // };
            
//             const bodyParameters = {
//                email: values.username,
//                password: values.password
//             };
            
//         axios
//             .post( 
//               'http://localhost:9000/api/v1/auth/login',
//               bodyParameters,
//             //   config
//             ).then((res) => {
//                 console.log(res)
//                 if (res.data.PRIVATE_TOKEN){
//                     localStorage.setItem('user_token', JSON.stringify(res.data.PRIVATE_TOKEN))
//                     // localStorage.setItem('react-app-note-data', JSON.stringify(oldDatas))
                    
                   
//                     // dispatch(loadUserName())
//                     dispatch(headerSlice.actions.saveUsername(res.data.user.email))
//                     navigate("/mainpage")
//                 }

//             })
//             .catch(console.log);
//     };

//     const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//     };
//     return {
//         onFinish,
//         onFinishFailed
//     };
// }

// export default useLogin;