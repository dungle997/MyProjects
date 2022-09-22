import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'
import SyncStorage from 'sync-storage'
import axios from 'axios'
import headerSlice from "../../redux/headerSlice";

function useLogin() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [notify, setNotify] = useState('')
    const handleRegister = () => {
        navigation.navigate('Register')
    }
    const handleLogin = () => {

        if (!email){
            setEmailError(true)
        }
        if (!password){
            setPasswordError(true)
        } 
     
        if (email && password) { 
            const bodyParameters = {
                email,
                password,
            };
                
            axios
                .post( 
                'http://localhost:9000/api/v1/auth/login',
                bodyParameters,
                //   config
                ).then((res) => {
                    console.log(res)
                    if (res.data.message){
                        setNotify(res.data.message)
                    }
                    if (res.data.PRIVATE_TOKEN){
                        SyncStorage.set('user_token', JSON.stringify(res.data.PRIVATE_TOKEN))
                        dispatch(headerSlice.actions.saveUsername(res.data.user.email))
                        navigation.navigate("MainPage")
                        setNotify('')

                    }

                })
                .catch(console.log);
        }

        setEmail('')
        setPassword('')
    }
    
    
    return {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        notify,
        setNotify,
        handleRegister,
        handleLogin,
    };
}

export default useLogin;