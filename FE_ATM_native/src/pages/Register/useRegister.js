import React, {useState} from "react";
import axios from '../../shared/axios'
import { useNavigation } from '@react-navigation/native';

function useRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmError, setConfirmError] = useState(false)
    const [confirmErrorNoMap, setConfirmErrorNoMap] = useState(false)
    const [login, setLogin] = useState(false)

    const navigation = useNavigation()

    const handleReturnLogin = () => {
        navigation.navigate('Login')
    }


    const handleRegister = () => {
        if (!email){
            setEmailError(true)
        }
        if (!password){
            setPasswordError(true)
        } 
        if (password !== confirm){
            setConfirmErrorNoMap(true)
        }
        if (!confirm){
            setConfirmError(true)
        }
        if(email && password && confirm && !confirmErrorNoMap){
            const bodyParameters = {
                email,
                password,
             };
             
            axios
                .post( 
                '/api/v1/auth/register',
                bodyParameters,
                //   config
                ).then((res) => {
                    console.log(res)
                    if (res.data.PRIVATE_TOKEN){
                        console.log("Dang ky thanh cong")
                        setLogin(true)
                    }
        
                })
                .catch(console.log);
        }
        
}
    return {
        email, 
        setEmail,
        password,
        setPassword,
        confirm,
        setConfirm,
        handleRegister,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        confirmError,
        setConfirmError,
        confirmErrorNoMap,
        setConfirmErrorNoMap,
        login,
        setLogin,
        handleReturnLogin,
    };
}

export default useRegister;