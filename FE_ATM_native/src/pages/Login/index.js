import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios'
import SyncStorage from 'sync-storage'
// import {  } from "@react-native-material/core";
// import useLogin from './useLogin'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(email)
    // console.log('Log   log')
    const onPress = () => {
        // console.log("dajfklasjdfl")
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
                if (res.data.PRIVATE_TOKEN){
                    SyncStorage.set('user_token', JSON.stringify(res.data.PRIVATE_TOKEN))
                    // // localStorage.setItem('react-app-note-data', JSON.stringify(oldDatas))
                    
                    // console.log(typeof(SyncStorage.get('user_token')))
                   
                    // dispatch(loadUserName())
                    // dispatch(headerSlice.actions.saveUsername(res.data.user.email))
                    navigation.navigate("MainPage")
                }

            })
            .catch(console.log);
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.register_button}>Register Account</Text>
            </TouchableOpacity>
           
        </View>
    )
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},  
inputView:{
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
  },
  
TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // alignItems: 'center'
    // marginLeft: 20,
},
loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#FF1493",
    // color: '#000',
},
register_button: {
    marginTop: 40,
    fontSize: 16
}

})
export default Login

